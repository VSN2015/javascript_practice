courses = [
    {
        name: "React",
        price: 200000,
        image: "https://reactjs.org/logo-og.png",
        description: "React is a JavaScript library for building user interfaces",
        rating: 4.5,
        is_active: true,
        category: "JavaScript",
        tags: [
            'js', 'react', 'frontend'
        ]
    },
    {
        name: "Node",
        price: 150000,
        image: "https://nodejs.org/static/images/logo.svg",
        description: "Node.js is a JavaScript",
        rating: 4.5,
        is_active: true,
        category: "JavaScript",
        tags: [
            'js', 'node', 'backend'
        ]
    },
    {
        name: "Next",
        price: 250000,
        image: "https://nextjs.org/logo.svg",
        description: "Next.js is a React framework for",
        rating: 4.5,
        is_active: true,
        category: "JavaScript",
        tags: [
            'js', 'react'
        ]
    }
]

// filter: dùng để lọc và trả về các phần tử thoả điều kiện

// filtered_courses = courses.filter((x) => x.rating > 5 )
// console.table(filtered_courses, ["image", "name", "price", "rating"])

// filtered_courses = courses.filter((x) => x.name === 'Next')
// console.table(filtered_courses)

// map: dùng để thay đổi giá trị trong mảng và trả về đầy đủ số lượng phần tử trong mảng 
// updated_courses = courses.map(x => {
//     return {
//         ...x,
//         price: x.price + 100
//     }
// })
// console.table(updated_courses)

// FOREACH: chỉ để loop
// courses.forEach(x => console.log(x));

// FIND: dùng để tìm kiếm và trả về phần tử thoả điều kiện
// course = courses.find(x => x.rating > 4)
// console.info("course", course)

// course  = courses.find(x => x.description.includes("React"))
// console.info(course)

// MAP - SOME
check_course_rating = courses.some(x => x.rating > 5)
console.info(check_course_rating)


// MAP - EVERY
check_course_rating = courses.every(x => x.rating > 4)
console.info(check_course_rating)
