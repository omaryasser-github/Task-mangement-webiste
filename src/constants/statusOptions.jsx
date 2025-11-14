import TimeAttack from "../assets/Time_atack_duotone.svg";
import DoneRound from "../assets/Done_round_duotone.svg";
import CloseRing from "../assets/close_ring_duotone.svg";

export const statusOptions = [
  {
    value: "inProgress",
    label: "In Progress",
    icon: <img src={TimeAttack} alt="In Progress" />,
    color: "#f59e0b",
  },
  {
    value: "completed",
    label: "Completed",
    icon: <img src={DoneRound} alt="Completed" />,
    color: "#22c55e",
  },
  {
    value: "wontDo",
    label: "Won’t do",
    icon: <img src={CloseRing} alt="Won’t do" />,
    color: "#ef4444",
  },
];
