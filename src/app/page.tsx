"use client";

import React from "react";

enum LessonStatus {
    Attending = "Attending",
    Absent = "Absent",
    Online = "Online",
    Sometimes = "Sometimes",
}

const schedule = {
    monday: [
        {
            time: "08:15",
            end_time: "09:00",
            subject: "Programowanie obiektowo-funkcyjne",
            type: "Lab",
            room: "3.05",
            teacher: "dr Tomasz Górski",
            status: LessonStatus.Attending,
            notes: "from 25.03",
        },
        {
            time: "09:00",
            end_time: "10:00",
            subject: "Programowanie obiektowo-funkcyjne",
            type: "Lab",
            room: "3.05",
            teacher: "dr Tomasz Górski",
            status: LessonStatus.Attending,
            notes: "from 25.03",
        },
        {
            time: "10:00",
            end_time: "11:00",
            subject: "Programowanie obiektowo-funkcyjne",
            type: "Lab",
            room: "3.05",
            teacher: "dr Tomasz Górski",
            status: LessonStatus.Attending,
            notes: "from 25.03",
        },
        {
            time: "11:00",
            end_time: "11:15",
            subject: "Programowanie obiektowo-funkcyjne",
            type: "Lab",
            room: "3.05",
            teacher: "dr Tomasz Górski",
            status: LessonStatus.Attending,
            notes: "from 25.03",
        },
    ],
    tuesday: [
        {},
        {},
        {
            time: "10:00",
            end_time: "11:00",
            subject: "Wstęp do programowania deklaratywnego",
            type: "Lecture",
            room: "1.14",
            teacher: "dr hab. Christoph Schwarzweller, prof. UG",
            status: LessonStatus.Sometimes,
        },
        {
            time: "11:00",
            end_time: "11:30",
            subject: "Wstęp do programowania deklaratywnego",
            type: "Lecture",
            room: "1.14",
            teacher: "dr hab. Christoph Schwarzweller, prof. UG",
            status: LessonStatus.Sometimes,
        },
        {
            time: "12:15",
            end_time: "13:00",
            subject: "Wstęp do programowania deklaratywnego",
            type: "Lab",
            room: "1.14",
            teacher: "dr hab. Christoph Schwarzweller, prof. UG",
            status: LessonStatus.Attending,
        },
        {
            time: "13:00",
            end_time: "13:45",
            subject: "Wstęp do programowania deklaratywnego",
            type: "Lab",
            room: "1.14",
            teacher: "dr hab. Christoph Schwarzweller, prof. UG",
            status: LessonStatus.Attending,
        },
        {
            time: "14:00",
            end_time: "15:00",
            subject: "Bezpieczeństwo aplikacji webowych",
            type: "Lab",
            room: "3.04",
            teacher: "mgr Konrad Sołtys",
            status: LessonStatus.Attending,
        },
        {
            time: "14:00",
            end_time: "15:30",
            subject: "Bezpieczeństwo aplikacji webowych",
            type: "Lab",
            room: "3.04",
            teacher: "mgr Konrad Sołtys",
            status: LessonStatus.Attending,
        },
        {
            time: "16:00",
            end_time: "17:00",
            subject: "Inteligencja obliczeniowa",
            type: "Lecture",
            room: "1.14",
            teacher: "mgr Konrad Sołtys",
            status: LessonStatus.Sometimes,
        },
        {
            time: "17:00",
            end_time: "17:30",
            subject: "Inteligencja obliczeniowa",
            type: "Lecture",
            room: "1.14",
            teacher: "mgr Konrad Sołtys",
            status: LessonStatus.Sometimes,
        },
    ],
    wednesday: [
        {
            time: "08:00",
            end_time: "09:00",
            subject: "Technologie chmurowe",
            type: "lecture",
            teacher: "dr Jakub Neumann",
            room: " 3.05",
            notes: "until 10.04",
            status: LessonStatus.Absent,
        },
        {
            time: "09:00",
            end_time: "09:30",
            subject: "Technologie chmurowe",
            type: "lecture",
            teacher: "dr Jakub Neumann",
            room: " 3.05",
            notes: "until 10.04",
            status: LessonStatus.Absent,
        },
        {
            time: "10:00",
            end_time: "11:00",
            subject: "Technologie chmurowe",
            type: "lab",
            teacher: "trzech kasztanów",
            room: " 3.05",
            notes: "until 10.04",
            status: LessonStatus.Online,
        },
        {
            time: "11:00",
            end_time: "11:30",
            subject: "Technologie chmurowe",
            type: "lab",
            teacher: "trzech kasztanów",
            room: " 3.05",
            notes: "until 10.04",
            status: LessonStatus.Online,
        },
        {
            time: "13:00",
            end_time: "14:00",
            subject: "Programowanie w języku Golang",
            type: "lecture",
            teacher: "dr Piotr Arłukowicz, prof. UG",
            room: "1.14",
            status: LessonStatus.Attending,
        },
        {
            time: "14:00",
            end_time: "14:30",
            subject: "Programowanie w języku Golang",
            type: "lecture",
            teacher: "dr Piotr Arłukowicz, prof. UG",
            room: "1.14",
            status: LessonStatus.Attending,
        },
        {
            time: "15:00",
            end_time: "16:00",
            subject: "Bezpieczeństwo aplikacji webowych",
            type: "lecture",
            teacher: "dr Jakub Neumann",
            room: "1.14",
            notes: "until 10.04",
            status: LessonStatus.Absent,
        },
        {
            time: "16:00",
            end_time: "16:30",
            subject: "Bezpieczeństwo aplikacji webowych",
            type: "lecture",
            teacher: "dr Jakub Neumann",
            room: "1.14",
            notes: "until 10.04",
            status: LessonStatus.Absent,
        },
    ],
    thursday: [
        {},
        {},
        {},
        {},
        {},
        {},
        {
            time: "14:00",
            end_time: "15:00",
            subject: "Programowanie w języku Golang",
            type: "lab",
            teacher: "dr Piotr Arłukowicz, prof. UG",
            room: "3.11",
            status: LessonStatus.Attending,
        },
        {
            time: "15:00",
            end_time: "15:30",
            subject: "Programowanie w języku Golang",
            type: "lab",
            teacher: "dr Piotr Arłukowicz, prof. UG",
            room: "3.11",
            status: LessonStatus.Attending,
        },
    ],
    friday: [
        {
            time: "08:00",
            end_time: "09:00",
            subject: "Inteligencja obliczeniowa",
            type: "lab",
            room: "3.05",
            teacher: "mgr Laura Grzonka",
            notes: "from 15.03",
            status: LessonStatus.Attending,
        },
        {
            time: "09:00",
            end_time: "09:30",
            subject: "Inteligencja obliczeniowa",
            type: "lab",
            room: "3.05",
            teacher: "mgr Laura Grzonka",
            notes: "from 15.03",
            status: LessonStatus.Attending,
        },
        {
            time: "10:00",
            end_time: "11:00",
            subject: "Programowanie obiektowo-funkcyjne",
            type: "lecture",
            room: "1.14",
            teacher: "dr Tomasz Górski",
            notes: "from 15.03",
            status: LessonStatus.Attending,
        },
        {
            time: "11:00",
            end_time: "11:30",
            subject: "Programowanie obiektowo-funkcyjne",
            type: "lecture",
            room: "1.14",
            teacher: "dr Tomasz Górski",
            notes: "from 15.03",
            status: LessonStatus.Attending,
        },
        {
            time: "12:15",
            end_time: "13:00",
            subject: "Podstawy kryptografii",
            type: "lecture",
            room: "1.14",
            teacher: "dr Andrzej Borzyszkowski",
            notes: "every 2 weeks",
            status: LessonStatus.Attending,
        },
        {
            time: "13:00",
            end_time: "13:45",
            subject: "Podstawy kryptografii",
            type: "lecture",
            room: "1.14",
            teacher: "dr Andrzej Borzyszkowski",
            notes: "every 2 weeks",
            status: LessonStatus.Attending,
        },
        {
            time: "14:00",
            end_time: "15:00",
            subject: "Podstawy kryptografii",
            type: "lab",
            room: "3.11",
            teacher: "dr Andrzej Borzyszkowski",
            notes: "every 2 weeks",
            status: LessonStatus.Attending,
        },
        {
            time: "15:00",
            end_time: "15:30",
            subject: "Podstawy kryptografii",
            type: "lab",
            room: "3.11",
            teacher: "dr Andrzej Borzyszkowski",
            notes: "every 2 weeks",
            status: LessonStatus.Attending,
        },
        {
            time: "16:00",
            end_time: "17:00",
            subject: "ABC przedsiębiorczości",
            type: "lab",
            room: "D003 ",
            teacher: "dr Ewa Ignaciuk",
            status: LessonStatus.Absent,
        },
    ],
};

export default function Main() {
    return (
        <div className="container mx-auto m-4 text-center">
            <div className="flex flex-row">
                <div className="flex flex-col flex-grow items-center bg-zinc-300">
                    <div className="flex-grow">HOURS</div>
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div
                            className="h-20 flex items-center border-t-2 border-zinc-500"
                            key={i}
                        >
                            {i + 8}:00 - {i + 9}:00
                        </div>
                    ))}
                </div>
                {Object.keys(schedule).map((day) => (
                    <div
                        className="flex flex-col flex-grow bg-zinc-200"
                        key={day}
                    >
                        <div>{day.toUpperCase()}</div>
                        {schedule[day].map((lesson, i) => {
                            let height = 16 * 4;
                            let end_time = lesson.end_time;

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
                                    className={`shadow-lg ${color} mx-2 my-2 py-2 rounded-md p-4 flex flex-col justify-between`}
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
