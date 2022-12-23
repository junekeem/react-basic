import React, { useReducer, useState } from 'react';
import { useImmer } from 'use-immer'

export default function AppMentors() {
  const [person, updatePerson] = useImmer(initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`Choose the name you want to change`);
    const current = prompt(`Enter the new name`);
    updatePerson(person => {
      const mentor = person.mentors.find(mentor => mentor.name === prev);
      mentor.name = current;
    });
  };

  const handleAdd = () => {
    const name = prompt(`Enter the new mentor's name`);
    const title = prompt(`Enter the new mentor's title`);
    updatePerson(person => {
      person.mentors.push({ name, title });
    })
  };

  const handleDelete = () => {
    const name = prompt(`Enter the mentor's name to delete`);
    updatePerson(person => {
      const index = person.mentors.findIndex(mentor => mentor.name === name);
      person.mentors.splice(index, 1);
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