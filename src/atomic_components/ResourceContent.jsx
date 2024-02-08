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

// bookObjSchema = {
//     "id": 611,
//     "uploader": {
//         "id": 1,
//         "username": "Jesulayomi",
//         "email": null
//     },
//     "level": 0,
//     "size": 26809309,
//     "title": "Electric Power Transformer Engineering Third Edition By James H Harlow.pdf",
//     "session": 2022,
//     "downloads": 0,
//     "description": null,
//     "download": "https://drive.google.com/uc?id=10dJsin8qTQWo2umZWaXWPZBWfQLkF8CL&export=download",
//     "drive_id": "10dJsin8qTQWo2umZWaXWPZBWfQLkF8CL",
//     "parents": [
//         "1gvcm4ZlNDre3a8iyVbkBmZQHhgGSpZ73",
//         "14S3iZqI2iLDSnvW6ZqQNT33CMAV3uRiT",
//         "1-obuw7A8cKwgwOuzMkP39IXf3bveW4tl",
//         "1P7OJ1PP9Kj9Hg64GHrU3eceuIYyao-Eg",
//         "11DI5vBp5Oui86iMGBbP-o_S4fPZBrR8m"
//     ],
//     "tag": "GEN",
//     "code": null
// }

const ResourceContent = ({book}) => {
    const [loading,  setLoading] = useState(true);
    const [bookObj, setBookObj] = useState(null);

    const levels = {
    "100": 100,
    "200": 200,
    "300": 300,
    "400": 400,
    "500": 500,
    "TXT": 0,
    }

    const depts = ["ABE", "CVE", "ELE", "GEN", "MCE", "MTE"]

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

    const fetchBook = (bookId) => {
        try {
            if ((bookId !== null)) {
            axiosHandler.get(`books/${bookId}/`)
                .then(response => {
                    setBookObj(response.data);
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
        fetchBook(book);
    }, []);

    const handleBack = () => {
        window.location.href = `/resources`
    }

    function update(formData) {
        const content = formData.get("title");
        const button = formData.get("button");
        alert(`'${content}' was published with the '${button}' button`);
    }

    return (
    <div>
        {
        loading ? (
            <div className="text-center">
                <Loader />
            </div>
        ) : (
            <div>
                <div className="flex justify-between">
                    <button className="bg-red-500 text-white px-4 py-2 rounded-xl" onClick={handleBack}>Back</button>
                </div>
                <div>
                    <h2 className="text-center text-2xl font-bold">{bookObj.title}</h2>
                    <form action={update} className="flex flex-col gap-3">
                        <div>
                            <label htmlFor="title">Title:</label>
                            <input type="text" name="title" id="title" value={bookObj.title} />
                        </div>
                        <div className="flex flex-row justify-between">
                            {/* Setting Levels , Depts, Course and other fields */}
                            <label>
                                Level:
                                <select>
                                    <option value="" disabled>{bookObj.level}</option>
                                    <option value="100">100</option>
                                    <option value="200">200</option>
                                    <option value="300">300</option>
                                    <option value="400">400</option>
                                    <option value="500">500</option>
                                    <option value="0">TXT</option>
                                </select>
                            </label>
                            <label>
                                Dept:
                                <select>
                                    {
                                        depts.map((dept, index) => (
                                            <option key={index} value={index}>{dept}</option>
                                        ))
                                    }
                                </select>
                            </label>
                            <label>
                                Level:
                                <select>
                                    <option value="" disabled>Level: {bookObj.level}</option>
                                    <option value="100">100</option>
                                    <option value="200">200</option>
                                    <option value="300">300</option>
                                    <option value="400">400</option>
                                    <option value="500">500</option>
                                    <option value="0">TXT</option>
                                </select>
                            </label>
                        </div>
                        <div className="flex flex-row-reverse">
                            <button
                                className="bg-primary1 hover:bg-green-600 text-white text-center px-4 py-2 rounded-md"
                                type="submit"
                                name="save"
                                value="submit"
                            > Save </button>
                            <button className="bg-primary1 hover:bg-green-600 text-white px-4 py-2 rounded-md">Download</button>
                        </div>
                    </form>
                </div>
            </div>
        )}
    </div>
    );
}

export default ResourceContent;