"use client";

import { usePathname } from "next/navigation";
import React, { useState, useEffect } from 'react';


enum LessonStatus {
    Attending = "Attending",
    Absent = "Absent",
    Online = "Online",
    Sometimes = "Sometimes",
}

export default function SchedulePage() {

    const pathname = usePathname();
    const id = pathname.split("/")[1];

    // import json with name id
    const [schedule, setSchedule] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(`schedules/${id}.json`);
            const data = await response.json();
            setSchedule(data);
        } catch (error) {
            console.error('Error fetching JSON data:', error);
        }
        };

        fetchData();
    }, []);

    if (!schedule) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto w-full m-4 text-center">
            <div className="flex flex-row">
                <div className="flex flex-col flex-grow items-center bg-zinc-300 rounded-l-lg">
                    <div className="flex-grow">HOURS</div>
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div
                            className="h-20 flex items-center w-40 justify-center"
                            key={i}
                        >
                            {i + 8}:00 - {i + 9}:00
                        </div>
                    ))}
                </div>
                {Object.keys(schedule).map((day) => (
                    <div
                        className="flex flex-col flex-grow min-w-72 bg-zinc-200 last:rounded-r-lg"
                        key={day}
                    >
                        <div>{day.toUpperCase()}</div>
                        {schedule[day].map((lesson, i) => {
                            let height = 16 * 4;
                            let { end_time } = lesson;

                            if (
                                i !== 0 &&
                                lesson.subject ===
                                schedule[day][i - 1].subject &&
                                lesson.status === schedule[day][i - 1].status &&
                                lesson.type === schedule[day][i - 1].type
                            ) {
                                return;
                            }

                            for (let j = i + 1; j < schedule[day].length; j++) {
                                if (
                                    lesson.subject ===
                                    schedule[day][j].subject &&
                                    lesson.status === schedule[day][j].status &&
                                    lesson.type === schedule[day][j].type
                                ) {
                                    height += 20 * 4;
                                    end_time = schedule[day][j].end_time;
                                } else {
                                    break;
                                }
                            }

                            let color = "bg-red-400";

                            if (lesson.status === LessonStatus.Attending) {
                                color = "bg-green-600";
                            } else if (lesson.status === LessonStatus.Absent) {
                                color = "bg-gray-400";
                            } else if (lesson.status === LessonStatus.Online) {
                                color = "bg-blue-400";
                            } else if (
                                lesson.status === LessonStatus.Sometimes
                            ) {
                                color = "bg-yellow-400";
                            } else {
                                color = "";
                            }

                            console.log(lesson.subject, height, color);

                            if (color === "") {
                                return (
                                    <div
                                        key={i}
                                        className="mx-2 my-2 py-2"
                                        style={{ height }}
                                    ></div>
                                );
                            }

                            return (
                                <div
                                    className={`shadow-lg ${color} mx-2 my-2 py-2 rounded-md p-4 flex flex-col justify-between overflow-scroll`}
                                    key={i}
                                    style={{ height }}
                                >
                                    <div className="text-md flex flex-row justify-around">
                                        <div>
                                            {lesson.time} - {end_time}
                                        </div>
                                        <div>{lesson.room}</div>
                                    </div>
                                    <div className="text-lg font-semibold">
                                        {lesson.subject} - {lesson.type}
                                    </div>
                                    <div className="text-sm">
                                        {lesson.teacher}
                                    </div>
                                    <div className="text-xs italic">
                                        {lesson.notes}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}
