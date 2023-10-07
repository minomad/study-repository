# useReducer

리듀서함수는 상태 로직을 관리한다

```jsx
function yourReducer(state, action) {
  // 현재 상태를 업데이트 한 다음 상태를 반환
}
```

액션을 전달하는 type은 필수 속성으로 객체는 자유롭게 설정할 수 있음

```jsx
function handleAddTask(text) {
  dispatch({
    type: "added",
    id: nextId++,
    text: text,
  });
}

function handleChangeTask(task) {
  dispatch({
    type: "changed",
    task: task,
  });
}

function handleDeleteTask(taskId) {
  dispatch({
    type: "deleted",
    id: taskId,
  });
}
```

리듀서는 switch문을 사용하는 것이 관례

```jsx
const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added":
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    case "changed":
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    case "deleted":
      return tasks.filter((t) => t.id !== action.id);
    default:
      throw Error(`${action.type}은 잘못된 요청입니다.`);
  }
}
```

```jsx
import { useReducer } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import tasksReducer, { intiialState } from './tasksReducer';

let nextId = initialTasks.length;

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <>
      <h1>프라하 여행 일정</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

export const initialTasks = [
  {id: 0, text: '카프카 박물관 방문', done: true},
  {id: 1, text: '퍼핏쇼 관람', done: false},
  {id: 2, text: '레논 월픽', done: false},
];

export default function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added':
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    case 'changed':
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    case 'deleted':
      return tasks.filter((t) => t.id !== action.id);
    default:
      throw Error(`${action.type}은 잘못된 요청입니다.`);
  }
}
```
