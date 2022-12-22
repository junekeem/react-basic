import React, { useState } from 'react';

export default function AppMentors() {
  const [person, setPerson] = useState({
    name: '엘리',
    title: '개발자',
    mentors: [
      {
        name: '밥',
        title: '시니어개발자',
      },
      {
        name: '제임스',
        title: '시니어개발자',
      }],
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는:
        {person.mentors.map(mentor => (
          <li>{mentor.name} ({mentor.title})</li>
        ))}
      </p>
      <button
        onClick={() => {
          const prev = prompt(`Choose the name you want to change`);
          const current = prompt(`Enter the new name`);
          const index = person.mentors.findIndex(mentor => (mentor.name === prev));
          let mentors = person.mentors;
          if (index !== -1) {
            mentors[index] = { ...mentors[index], name: current };
          }
          setPerson(person => ({ ...person, mentors }))
        }}>
        멘토의 이름을 바꾸기
      < /button>
    </div>
  );
}
