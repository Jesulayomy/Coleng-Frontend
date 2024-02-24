import axios from 'axios';
import Loader from '../components/Loader';
import NoContent from '@/atomic_components/NoContent';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';


let axiosHandler = axios.create({
  baseURL: "https://Jesulayomy.pythonanywhere.com/library/"
});

function formatSize(size) {
  return (size / (1024 * 1024)).toFixed(1) + ' MB';
}

const ResourceContent = ({ book }) => {
  const [loading, setLoading] = useState(true);
  const [bookObj, setBookObj] = useState(null);
  const [courses, setCourses] = useState(null);
  const [level, setLevel] = useState(null);
  const [dept, setDept] = useState(null);
  const [course, setCourse] = useState(null);

  const levels = {
    "100": 100,
    "200": 200,
    "300": 300,
    "400": 400,
    "500": 500,
    "TXT": 0,
  };

  const depts = ["ABE", "CVE", "ELE", "GEN", "MCE", "MTE"];

  useEffect(() => {
    axiosHandler.get('codes/')
      .then((response) => {
        setCourses(response.data.map(course => course.code));
      })
    axiosHandler.get(`books/${book}/`)
      .then((books) => {
        setBookObj(books.data);
      })
      .catch((error) => {
        console.log(error);
        setBookObj(null);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  const handleBack = () => {
    window.location.href = `/resources`;
  };

  const handleLevel = (e) => {
    setLevel(e.target.value);
  };

  const handleDept = (e) => {
    setDept(e.target.value);
  };

  const handleCourse = (e) => {
    setCourse(e.target.value);
  };

  function update(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    let data = {
      title: formJson.title,
      description: formJson.desc,
      level: level || bookObj.level,
      tag: dept || bookObj.tag,
      code: course || bookObj.code,
    }
    console.log(data);
    toast.promise(
      axiosHandler.put(`books/${book}/`, data), 
      {
        loading: 'Updating...',
        success: 'Successful',
        error: 'Failed!'
      }
    );
  }

  return (
    <div>
      {
        loading ? (
          <div className="text-center">
            <Loader />
          </div>
        ) : (
          bookObj ? (
            <div>
              <div className="flex justify-between">
                <button className="bg-red-500 text-white px-4 py-2 rounded-xl" onClick={handleBack}>Back</button>
                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded-xl"
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScy0bLFM7anOP16saKccBjWB6FSggMaztohBiwAfmszCn5Y8g/viewform?usp=sf_link"
                    target="_blank"
                  >Report</a>
                </button>
              </div>
              <div>
                <div>
                  <h2 className="px-2 py-2 flex flex-col break-words text-center text-2xl font-bold">{bookObj.title}</h2>
                </div>
                <span className="flex flex-row-reverse">, {bookObj.downloads} Downloads<span className="italic flex-row-reverse">By {bookObj.uploader.username}</span></span>
                <form onSubmit={update} className="flex flex-col gap-3">
                  <div>
                    <label htmlFor="title">Title:</label>
                    <input
                      className="focus:border-slate-300 shadow-sm shadow-slate-500"
                      type="text" name="title" id="title" defaultValue={bookObj.title} />
                  </div>
                  <div>
                    <label htmlFor="title">Description:</label>
                    <textarea
                      className="focus:border-slate-300 shadow-sm shadow-slate-500"
                      name="desc" id="desc" defaultValue={bookObj.description}
                      rows="4" cols="50"
                    ></textarea>
                  </div>
                  <div className="flex flex-row justify-between">
                    <label>
                      Level:
                      <select
                        className="focus:border-slate-300 shadow-sm shadow-slate-500"
                        id="selectedLevel"
                        onChange={handleLevel}
                        defaultValue={bookObj.level}
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
                        className="focus:border-slate-300 shadow-sm shadow-slate-500"
                        onChange={handleDept}
                        defaultValue={bookObj.tag}
                      >
                        {depts.map((dept, index) => {
                          return (
                            <option
                              key={dept}
                              value={`${dept}`}
                            >{dept}</option>
                          )
                        })}
                      </select>
                    </label>
                    <label>
                      Course:
                      <select
                        id="slectedCourse"
                        className="focus:border-slate-300 shadow-sm shadow-slate-500"
                        onChange={handleCourse}
                        defaultValue={bookObj.code || 'GEN'}
                      >
                        {courses.map((course) => {
                          return (
                            <option
                              key={course}
                              value={course}
                            >{course}</option>
                          )
                        })}
                        {bookObj.code ?
                          <></> :
                          <><option key={"GEN"} value={"GEN"}>{"Text Book"}</option></>
                        }
                      </select>
                    </label>
                    {/* Add other labels that may be readonly */}
                  </div>
                  <div className="flex flex-row-reverse">
                    <button
                      className="bg-primary1 hover:bg-green-600 text-white text-center px-4 py-2 rounded-md"
                      type="submit"
                      name="save"
                    > Save </button>
                  </div>
                </form>
                <div className="flex flex-row-reverse mt-2">
                  <button
                    className="bg-primary1 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                    onClick={() => { axiosHandler.put(`books/${book}/`, { 'downloads': bookObj.downloads + 1 }) }}
                  >
                    <a href={`${bookObj.download}`}>Download {formatSize(bookObj.size)}</a>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-between">
                <button className="bg-red-500 text-white px-4 py-2 rounded-xl" onClick={handleBack}>Back</button>
                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded-xl"
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScy0bLFM7anOP16saKccBjWB6FSggMaztohBiwAfmszCn5Y8g/viewform?usp=sf_link"
                    target="_blank"
                  >Report</a>
                </button>
              </div>
              <NoContent text={`books with id (${book})`} />
            </div>
          )
        )}
    </div>
  );
};

export default ResourceContent;
