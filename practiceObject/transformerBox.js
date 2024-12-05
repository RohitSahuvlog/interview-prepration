// Implement a Student transfer box
// Create 2 mock API’s which returns a list of students and each student has a name, some marks and a unique registration ID.Data from the 2 API’s can have common students i.e.mock API 1 can have a student as — ABC / 98 % / 1234 (name / marks / registration ID) and this same data can be there in mock API 2 response as well.Now after creating these 2 API’s using Promises and hard-coded data, you need to merge the data coming from both API’s and have to delete the duplicates.
// Use the above data and render it in Box 1. Each student has a checkbox before its name and we can select multiple students at once.All the selected students can be moved to Box 2 by clicked on the 1st button and vice - versa for Box - 2.

import React, { useState, useEffect } from 'react';

const TransformerBox = () => {
    const [students1, setStudents1] = useState([]);
    const [students2, setStudents2] = useState([]);
    const [selectedStudents1, setSelectedStudents1] = useState([]);
    const [selectedStudents2, setSelectedStudents2] = useState([]);

    useEffect(() => {
        const fetchStudents1 = new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, name: 'John Doe', marks: 98, regId: 1234 },
                    { id: 2, name: 'Jane Doe', marks: 95, regId: 1235 },
                    { id: 3, name: 'Alice', marks: 90, regId: 1236 },
                    { id: 4, name: 'Bob', marks: 85, regId: 1237 },
                ]);
            }, 1000);
        });

        const fetchStudents2 = new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, name: 'John Doe', marks: 98, regId: 1234 },
                    { id: 2, name: 'Jane Doe', marks: 95, regId: 1235 },
                    { id: 3, name: 'Alice', marks: 90, regId: 1236 },
                    { id: 4, name: 'Bob', marks: 85, regId: 1237 },
                    { id: 5, name: 'Charlie', marks: 80, regId: 1238 },
                ]);
            }, 2000);
        });

        Promise.all([fetchStudents1, fetchStudents2]).then(([students1, students2]) => {
            const mergedStudents = [...students1, ...students2];
            const uniqueStudents = Array.from(new Set(mergedStudents.map(student => student.id)))
                .map(id => {
                    return mergedStudents.find(student => student.id === id);
                });
            setStudents1(uniqueStudents);
            setStudents2(uniqueStudents);
        });
    }, []);

    const handleSelectStudent1 = (student) => {
        const selectedIndex = selectedStudents1.indexOf(student);
        if (selectedIndex === -1) {
            setSelectedStudents1([...selectedStudents1, student]);
        } else {
            setSelectedStudents1(selectedStudents1.filter(s => s !== student));
        }
    };

    const handleSelectStudent2 = (student) => {

        const selectedIndex = selectedStudents2.indexOf(student);
        if (selectedIndex === -1) {
            setSelectedStudents2([...selectedStudents2, student]);
        } else {
            setSelectedStudents2(selectedStudents2.filter(s => s !== student));
        }
    };


    const handleTransferToBox2 = () => {
        setStudents2([...students2, ...selectedStudents1]);
        setStudents1(students1.filter(student => !selectedStudents1.includes(student)));
        setSelectedStudents1([]);
    };


    const handleTransferToBox1 = () => {
        setStudents1([...students1, ...selectedStudents2]);
        setStudents2(students2.filter(student => !selectedStudents2.includes(student)));
        setSelectedStudents2([]);
    };


    return (
        <div>
            <h1>Student Transfer Box</h1>
            <div style={{ display: 'flex' }}>
                <div style={{ border: '1px solid black', padding: 10, margin: 10 }}>
                    <h2>Box 1</h2>
                    {students1.map(student => (
                        <div key={student.id} style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type="checkbox"
                                checked={selectedStudents1.includes(student)}
                                onChange={() => handleSelectStudent1(student)}
                            />
                            <p>{student.name}</p>
                        </div>
                    ))}
                    <button onClick={handleTransferToBox2}>Move to Box 2</button>
                </div>
                <div style={{ border: '1px solid black', padding: 10, margin: 10 }}>
                    <h2>Box 2</h2>
                    {students2.map(student => (
                        <div key={student.id} style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type="checkbox"
                                checked={selectedStudents2.includes(student)}
                                onChange={() => handleSelectStudent2(student)}
                            />
                            <p>{student.name}</p>
                        </div>
                    ))}
                    <button onClick={handleTransferToBox1}>Move to Box 1</button>
                </div>
            </div>
        </div>
    );


}

export default TransformerBox;