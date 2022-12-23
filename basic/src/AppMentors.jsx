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
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`Choose the name you want to change`);
          const current = prompt(`Enter the new name`);
          /*          const index = person.mentors.findIndex(mentor => (mentor.name === prev));
                    let mentors = person.mentors;
                    if (index !== -1) {
                      mentors[index] = { ...mentors[index], name: current };
                    }
                    setPerson(person => ({ ...person, mentors }))*/

          setPerson(person => ({
            ...person, mentors: person.mentors.map(mentor => {
              if (mentor.name === prev) {
                return { ...mentor, name: current }
              }
              return mentor;
            })
          }))
        }}>
        멘토의 이름을 바꾸기
      < /button>
      <button
        onClick={() => {
          const name = prompt(`Enter the new mentor's name`);
          const title = prompt(`Enter the new mentor's title`);
          setPerson({ ...person, mentors: [...person.mentors, { name, title }] })
        }}
      >추가
      </button>
      <button
        onClick={() => {
          const name = prompt(`Enter the mentor's name to delete`);
          setPerson({
            ...person, mentors: person.mentors.filter(mentor => {
              return mentor.name !== name;
            })
          })
        }}
      >삭제
      </button>
    </div>
  );
}
