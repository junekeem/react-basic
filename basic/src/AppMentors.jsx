import React, { useState } from 'react';

export default function AppMentors() {
  const [person, setPerson] = useState(initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`Choose the name you want to change`);
    const current = prompt(`Enter the new name`);
    setPerson(person => ({
      ...person, mentors: person.mentors.map(mentor => {
        if (mentor.name === prev) {
          return { ...mentor, name: current }
        }
        return mentor;
      })
    }))
  };

  const handleAdd = () => {
    const name = prompt(`Enter the new mentor's name`);
    const title = prompt(`Enter the new mentor's title`);
    setPerson({ ...person, mentors: [...person.mentors, { name, title }] })
  };

  const handleDelete = () => {
    const name = prompt(`Enter the mentor's name to delete`);
    setPerson({
      ...person, mentors: person.mentors.filter(mentor => {
        return mentor.name !== name;
      })
    })
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (<li key={index}>
          {mentor.name} ({mentor.title})
        </li>))}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기< /button>
      <button onClick={handleAdd}>추가</button>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
}

const initialPerson = {
  name: '엘리', title: '개발자', mentors: [{
    name: '밥', title: '시니어개발자',
  }, {
    name: '제임스', title: '시니어개발자',
  }],
};