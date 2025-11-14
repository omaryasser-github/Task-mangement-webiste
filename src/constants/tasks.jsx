import AddIcon from "../assets/Add_round_duotone.svg";
import DoneIcon from "../assets/Done_round_duotone.svg";
import TimeIcon from "../assets/Time_atack_duotone.svg";
import CloseIcon from "../assets/close_ring_duotone.svg";

export const tasks = [
  {
    id: 1,
    state: "inProgress",
    label: "Task in Progress",
    bg: "#F5D565",
    icon: "⏰",
    actionBg: "bg-yellow-500",
    actionIcon: TimeIcon,
  },
  {
    id: 2,
    state: "completed",
    label: "Task Completed",
    bg: "#A0ECB1",
    icon: "🏋️‍♂️",
    actionBg: "bg-green-500",
    actionIcon: DoneIcon,
  },
  {
    id: 3,
    state: "wontDo",
    label: "Task Won't Do",
    bg: "#F7D4D3",
    icon: "☕",
    actionBg: "bg-red-500",
    actionIcon: CloseIcon,
  },
  {
    id: 4,
    state: "toDo",
    label: "Task To Do",
    description: "Work on a Challenge on devChallenges.io,  learn TypeScript.",
    bg: "#E3E8EF",
    icon: "📚",
    actionBg: "bg-blue-300",
    // actionIcon: null,
  },
  {
    id: 5,
    state: "add",
    label: "Add new task",
    bg: "#F5E8D5",
    actionBg: "bg-yellow-500",
    actionIcon: AddIcon,
  },
];
