import { Subject } from "../types";

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: "1",
        name: "Introduction to Computer Science",
        code: "CS101",
        department: "CS",
        description: "An introductory course on computer programming and problem solving.",
        createdAt: new Date().toISOString()
    },
    {
        id: "2",
        name: "Calculus I",
        code: "MATH101",
        department: "Math",
        description: "Differential and integral calculus of one variable.",
        createdAt: new Date().toISOString()
    },
    {
        id: "3",
        name: "English Composition",
        code: "ENG101",
        department: "English",
        description: "A course focusing on foundational writing and critical thinking skills.",
        createdAt: new Date().toISOString()
    }
];
