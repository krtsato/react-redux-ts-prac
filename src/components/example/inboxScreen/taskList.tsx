import React from "react"
import {connect} from "react-redux"
import {archiveTask, pinTask} from "@/example/lib/redux"
import {Task, ActionsProps, TaskProps} from "@/example/inboxScreen/taskList/task"
import {LoadingRow} from "@/example/inboxScreen/taskList/loadingRow"

interface TaskListProps {
  loading: boolean
  tasks: TaskProps[]
}

export const TaskList = (taskListProps: TaskListProps, actionsProps: ActionsProps): JSX.Element => {
  const {loading, tasks} = taskListProps
  const tasksInOrder = [
    ...tasks.filter(t => t.state === "TASK_PINNED"),
    ...tasks.filter(t => t.state !== "TASK_PINNED")
  ]

  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    )
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    )
  }

  return (
    <div className="list-items">
      {tasksInOrder.map(task => (
        <Task key={task.id} {...task} {...actionsProps} />
      ))}
    </div>
  )
}

export default connect(
  (tasks: Array<TaskProps>) => ({
    tasks: tasks.filter(t => t.state === "TASK_INBOX" || t.state === "TASK_PINNED")
  }),
  dispatch => ({
    onArchiveTask: (id: string): {type: string; id: string} => dispatch(archiveTask(id)),
    onPinTask: (id: string): {type: string; id: string} => dispatch(pinTask(id))
  })
)(TaskList)
