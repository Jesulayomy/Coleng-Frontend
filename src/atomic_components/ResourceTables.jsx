// "use client";

import { error } from "@/utils/toastify";
import axios from "axios";
import Loader from '../components/Loader';
import NoContent from '@/atomic_components/NoContent';
import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

let axiosHandler = axios.create({
  baseURL: "http://127.0.0.1:8000/library/"
})

function formatSize(size) {
  return (size / (1024 * 1024)).toFixed(1) + ' MB';
}


const ResourceTables = () => {
  const [loading,  setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [books, setBooks] = useState([]);
  const [pressedCourse, setPressedCourse] = useState(null);
  const [pressedLevel, setPressedLevel] = useState(null);
  const [pressedDept, setPressedDept] = useState(null);
  
  const levels = {
    "100": 100,
    "200": 200,
    "300": 300,
    "400": 400,
    "500": 500,
    "TXT": 0,
  }

  const depts = ["ABE", "CVE", "ELE", "MCE", "MTE"]

  const fetchCourses= (level, dept) => {
    axiosHandler.get(`codes/?tag=${depts[dept]}&level=${level}`)
      .then(response => {
        setCourses(response.data.map(course => course.code));
      })
      .catch(error => {
        console.error(error);
      });
    return;
  }

  const fetchBooks = (level, dept, course) => {
    try {
      let query = 'books/?';
      if ((level == null) && (dept == null)) {
        axiosHandler.get(`books/`)
          .then(response => {
            setBooks(response.data);
            setLoading(false);
          })
          .catch(error => {
            console.error(error);
          });
        return;
      } else if (level != null && dept != null) {
        let code = '';
        if (course != null) {
          code = `&code=${courses[course]}`;
        } else {
          fetchCourses(level, dept);
        }
        axiosHandler.get(`${query}level=${level}&tag=${depts[dept]}${code}`)
          .then(response => {
            setBooks(response.data);
            setLoading(false);
           })
          .catch(error => {
            console.error(error);
          });
        return;
      } else if ((level == null) && (dept != null)) {
        axiosHandler.get(`${query}tag=${depts[dept]}`)
          .then(response => {
            setBooks(response.data);
            setLoading(false);
          })
          .catch(error => {
            console.error(error);
          });
        return;
      } else if ((level != null) && dept == null) {
        axiosHandler.get(`${query}level=${levels[level] | 0}`)
          .then(response => {
            setBooks(response.data);
            setLoading(false);
          })
          .catch(error => {
            console.error(error);
          });
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBooks(pressedLevel, pressedDept, pressedCourse);
  }, []);

  const handleButtonClick = (newPressedLevel, newPressedDept, newPressedCourse) => {
    setLoading(true);
    if (newPressedCourse !== undefined) {
      if (pressedCourse === newPressedCourse) {
        setPressedCourse(null);
        fetchBooks(pressedLevel, pressedDept, undefined);
      } else {
        setPressedCourse(newPressedCourse);
        fetchBooks(pressedLevel, pressedDept, newPressedCourse);
      }
      return;
    } else {
      setPressedCourse(null);
    }

    if (newPressedLevel !== undefined) {
      if (pressedLevel === newPressedLevel) {
        setPressedLevel(null);
        fetchBooks(null, pressedDept, undefined);
      } else {
        setPressedLevel(newPressedLevel);
        fetchBooks(newPressedLevel, pressedDept, undefined);
      }
      return;
    }

    if (newPressedDept !== undefined) {
      if (pressedDept == newPressedDept)  {
        setPressedDept(null);
        fetchBooks(pressedLevel, null, undefined);
      } else {
        setPressedDept(newPressedDept);
        fetchBooks(pressedLevel, newPressedDept, undefined);
      }
      return;
    }

    fetchBooks(pressedLevel, pressedDept, undefined);
  };

  const handleResource = (id) => {
    window.location.href = `/resources/${id}`
  }

  return (
    <div>
      <h3 className="text-[1.0em] font-[500] sm:text-center">Levels:</h3>
      <div className="categories">
        {Object.keys(levels).map((level, i) => (
          <div key={i}>
            <button
              className={`cat${pressedLevel == levels[level] ? " presscat" : ""}`}
              onClick={() => handleButtonClick(levels[level], undefined, undefined)}
            >
              {level}
            </button>
          </div>
        ))}
      </div>
      <h3 className="text-[1.0em] font-[500] sm:text-center">Departments:</h3>
      <div className="categories">
        {Object.keys(depts).map((dept, i) => (
          <div key={i}>
            <button
              className={`cat${(pressedDept == dept) ? " presscat" : ""}`}
              onClick={() => handleButtonClick(undefined, dept, undefined)}
            >
              {depts[i]}
            </button>
          </div>
        ))}
      </div>
      <div>
      {
        pressedDept && pressedLevel
        ?
        <div>
          <h3 className="text-[1.0em] font-[500] sm:text-center">Courses:</h3>
          <div className="categories">
            {Object.keys(courses).map((course, i) => (
              <div key={i}>
                <button
                  className={`cat${(pressedCourse === course) ? " presscat" : ""}`}
                  onClick={() => handleButtonClick(undefined, undefined, course)}
                >
                  {courses[i]}
                </button>
              </div>
            ))}
          </div> 
        </div>
        :
        <></>
        // Add codes if dept is pressed
      }
      </div>
      <div className="py-6">
      {
      loading ? (
        <div className="text-center">
          <Loader />
        </div>
      ) : 
        books.length === 0 ? (
          <div>
            <NoContent text={`books in ${pressedDept ? `${depts[pressedDept]} ` : ""}${pressedLevel ? `${levels[pressedLevel] + "L"}` : ""} `} />
          </div>
        ) : (
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-3 py-1">Title</th>
                <th className="px-3 py-1">Code</th>
                <th className="px-3 py-1">Tag</th>
                <th className="px-3 py-1">Level</th>
                <th className="px-3 py-1">Session</th>
                <th className="px-3 py-1">Size</th>
                <th className="px-3 py-1">Download</th>
              </tr>
            </thead>
            <tbody>
              {
              // Add NoContent if no books are found
              books.map((book, i) => {
                return (
                  <>
                  <tr key={i} className="hover:bg-gray-300" onClick={() => handleResource(book.id)}>
                    <td className="border px-3 py-1">{book.title}</td>
                    <td className="border px-3 py-1">{book.code ? book.code : "TXT"}</td>
                    <td className="border px-3 py-1">{book.tag}</td>
                    <td className="border px-3 py-1">
                      {book.level == 0 ? "TXT" : book.level}
                    </td>
                    <td className="border px-3 py-1">{book.session}</td>
                    <td className="border px-3 py-1">
                        {formatSize(book.size)}
                    </td>
                    <td
                      className="border px-3 py-1 hover:bg-green-400"
                    >
                      <a
                        href={`${book.download}`}
                        style={{
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <FaDownload />
                      </a>
                    </td>
                  </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          )
        }
      </div>
    </div>
  );
}

export default ResourceTables;
