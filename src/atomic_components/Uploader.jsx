import axios from 'axios';
import Loader from '../components/Loader';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaPlus, FaSpinner } from 'react-icons/fa';


let axiosHandler = axios.create({
  baseURL: "https://Jesulayomy.pythonanywhere.com/library/"
});

const Uploader = ({ close }) => {
  const [loading, setLoading] = useState(true);
  const [tinyLoad, setTinyLoad] = useState(false);
  const [level, setLevel] = useState('0');
  const [dept, setDept] = useState('ABE');  // Check default department in demetrius
  const [course, setCourse] = useState(null);
  const [courses, setCourses] = useState([]);
  const [file, setFile] = useState(null);

  const levels = {
    "100": 100,
    "200": 200,
    "300": 300,
    "400": 400,
    "500": 500,
    "TXT": 0,
  };

  const depts = ["ABE", "CVE", "ELE", "MCE", "MTE"];

  const fetchCourses = (level, dept) => {
    let query = level && level != 0 ? `?level=${level}` : '';
    query += dept && level && level != 0 ? `&tag=${dept}` : dept ? `?dept=${dept}` : '';
    axiosHandler.get(`codes/${query}`)
      .then(response => {
        setCourses(response.data.map(course => course.code));
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
    return;
  };

  const handleLevel = (e) => {
    setLoading(true);
    setLevel(e.target.value);
    fetchCourses(e.target.value, dept);
  };

  const handleDept = (e) => {
    setLoading(true);
    setDept(e.target.value);
    fetchCourses(level, e.target.value);
  };

  const handleCourse = (e) => {
    setCourse(e.target.value);
  };

  const uploadBook = async (e) => {
    setTinyLoad(true);
    e.preventDefault();
    const form = e.target;
    const formData = new FormData();
    let data = {
      title: form.title.value,
      description: form.description.value,
      level: level,
      tag: dept,
      code: course,
      semester: form.semester.value,
      session: form.session.value,
      uploader: {
        username: form.username.value,
        email: form.email.value,
      },
    };
    formData.append('data', JSON.stringify(data));
    formData.append('book', file);

    if (!file || !data.title || !data.level || !data.tag) {
      setTinyLoad(false);
      return toast.error('Missing required fields');
    }

    try {
      toast.promise(
        axiosHandler.post(
          'books/',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
          { withCredentials: true }
        ),
        {
          loading: 'Uploading...',
          success: 'Book uploaded successfully',
          error: 'Failed to upload book',
        }
      );
    } catch (err) {
      console.log(err);
      setTinyLoad(false);
    } finally {
      e.target.reset();
      setTinyLoad(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchCourses(null, null);
  }, []);

  return (
    <div className="focus:outline-none transition-all duration-700 fade-in-out fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-10 w-[50%] lg:w-[70%] md:w-[90%] border-2 md:p-4 rounded-lg shadow-lg shadow-slate-500 bg-white">
      <div className="">
        <button
          type="button"
          className={`absolute top-4 right-7 transform rotate-45 text-red-500 rounded-full p-2`}
          style={{ fontSize: '1rem' }}
          onClick={close}
        >
          <FaPlus />
        </button>
      </div>
      <br />
      <div className="text-center p-2 text-[1.5rem] md:text-[1.1rem]">
        <p>Upload a new course material</p>
      </div>
      <div className="flex flex-col">
        <form onSubmit={uploadBook}>
          <label htmlFor="title">
            Title:
            <input
              type='text'
              name='title'
              placeholder='Title, Course topic or Name of the book'
              className="w-full p-2 m-2 border-2 md:p-1 md:m-1 md:border-1 border-gray-300 rounded-lg"
              required
            />
          </label>
          <label htmlFor="description">
            Description:
            <textarea
              name='description'
              placeholder='Description'
              rows={3}
              className="w-full p-2 m-2 border-2 md:p-1 md:m-1 md:border-1 border-gray-300 rounded-lg"
            />
          </label>
          <div className="flex flex-row justify-between w-full p-2 m-2 md:p-1 md:m-1 md:border-1">
            <label>
              Level:
              <select
                className="focus:border-slate-300 shadow-sm shadow-slate-500 md:p-1 md:m-1 md:border-1"
                id="selectedLevel"
                onChange={handleLevel}
                defaultValue={'0'}
              >
                {Object.values(levels).map((level) => {
                  return (
                    <option
                      key={`${level}`}
                      value={`${level}`}
                    >{level == 0 ? "TXT" : `${level}`}</option>
                  )
                })}
              </select>
            </label>
            <label>
              Dept:
              <select
                id="selectedDept"
                className="focus:border-slate-300 shadow-sm shadow-slate-500 md:p-1 md:m-1 md:border-1"
                onChange={handleDept}
              >
                {depts.map((dept, index) => {
                  return (
                    <option
                      key={index}
                      value={`${dept}`}
                    >{dept}</option>
                  )
                })}
              </select>
            </label>
            {loading ?
              <Loader /> :
              <label>
                Course:
                <select
                  id="slectedCourse"
                  className="focus:border-slate-300 shadow-sm shadow-slate-500 md:p-1 md:m-1 md:border-1"
                  onChange={handleCourse}
                  defaultValue={'GEN'}
                >
                  {courses.map((course) => {
                    return (
                      <option
                        key={course}
                        value={course}
                      >{course}</option>
                    )
                  })}
                  <><option value={"GEN"}>{"Text Book"}</option></>
                </select>
              </label>
            }
          </div>
          <div className="flex flex-row md:flex-col justify-between">
            <div
              className="w-1/2 md:w-full flex flex-row p-2 m-2 border-2 md:p-1 md:m-1 md:border-1 border-gray-300 rounded-lg"
            >
              <p>Semester: </p>
              <div className="flex flex-row w-full justify-around">
                <label>
                  <input type="radio" name="semester" value='' defaultChecked={true} />
                  N/A
                </label>
                <label>
                  <input type="radio" name="semester" value='1ST' />
                  1ST
                </label>
                <label>
                  <input type="radio" name="semester" value='2ND' />
                  2ND
                </label>
              </div>
            </div>
            <label htmlFor="session" className="w-1/2 md:w-full">
              <p className="w-2/3">Session:</p>
              <input
                type='number'
                name='session'
                defaultValue={2023}
                className="p-2 m-2 border-2 md:p-1 md:m-1 md:border-1 border-gray-300 rounded-lg"
                required
              />
            </label>
          </div>
          <input
            type='file'
            name='book'
            className="p-2 m-2 block w-full text-sm text-slate-600
                      file:mr-4 file:py-2 file:px-4 border-2 md:border-1 border-gray-300
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-violet-50 file:text-violet-700
                      hover:file:bg-violet-100 md:p-1 md:m-1 md:border-1"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
          <div className="flex flex-row">
            <input
              type="text"
              name="username"
              className="p-2 m-2 w-2/5 md:p-1 md:m-1 md:border-1 border-2 border-gray-300"
              placeholder="Nickname: Jesulayomi"
              required
            />
            <input
              type="email"
              name="email"
              className="p-2 m-2 w-3/5 md:p-1 md:m-1 md:border-1 border-2 border-gray-300"
              placeholder="Email: jesulayomy@gmail.com"
            />
          </div>
          <button
            type='submit' className="flex flex-row justify-center w-full p-2 m-2 border-2 border-gray-300 rounded-lg bg-green-500 text-white md:p-1 md:m-1 md:border-1"
          >
            {tinyLoad ? (
              <FaSpinner className="animate-spin" />
            ) : (
              <p>Upload</p>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Uploader;
