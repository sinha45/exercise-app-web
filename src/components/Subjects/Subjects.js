import React from 'react';
// import Card from '../Card/Card';

const Subjects = () => {

    const subData = [{ id: 1, subName: "Math", forClass: "nine", timeReq: 45, img: 'https://miro.medium.com/max/1400/1*L76A5gL6176UbMgn7q4Ybg.jpeg' },
    { id: 2, subName: "Math", forClass: "nine", timeReq: 45, img: 'https://miro.medium.com/max/1400/1*L76A5gL6176UbMgn7q4Ybg.jpeg' },
    { id: 3, subName: "Physics", forClass: "nine", timeReq: 45, img: 'https://miro.medium.com/max/1400/1*L76A5gL6176UbMgn7q4Ybg.jpeg' },
    { id: 4, subName: "Science", forClass: "nine", timeReq: 45, img: 'https://miro.medium.com/max/1400/1*L76A5gL6176UbMgn7q4Ybg.jpeg' },
    { id: 5, subName: "English", forClass: "nine", timeReq: 45, img: 'https://miro.medium.com/max/1400/1*L76A5gL6176UbMgn7q4Ybg.jpeg' },
    { id: 6, subName: "Chemistry", forClass: "nine", timeReq: 45, img: 'https://miro.medium.com/max/1400/1*L76A5gL6176UbMgn7q4Ybg.jpeg' },


    ];

    return (

        <div>
            {
                subData.map(subject => console.log(subject))
            }

        </div>

    );
};

export default Subjects;