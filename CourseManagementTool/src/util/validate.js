export const validate = (courses) => {
    let invalid = [];
    for (let i = 0; i < courses.length; i++){
        try {
            void courses[i]['Key'];
            void courses[i]['code'];
            void courses[i]['Sec'];
            void courses[i]['Course Title'];
        } catch (error) {
            invalid.push(courses[i])
        }
    }
    return courses.filter((course) => !invalid.includes(course));
};