import React from 'react'
import { EDUCATION } from '../../content/content';

const Education = () => {
    const { school, courses, gpa, graduation, degree } = EDUCATION;
    return (
        <div className="container">
            <div className="education">
                <div className="uni">
                    <h2>{school}</h2>
                    <p>{degree}<br />
                        GPA: {gpa}<br />
                        Graduation Date: {graduation}
                    </p>
                </div>
                <div id="courses">
                    <h2>Relevant Courses</h2>
                    <u>
                        {courses.map(course => (
                            <li>{course}</li>
                        ))}
                    </u>
                </div>
            </div>
        </div>
    )
}

export default Education
