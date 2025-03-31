export interface ButtonProps {
  left?: React.ReactNode;
  middle?: React.ReactNode;
  right?: React.ReactNode;
  int?: React.ReactNode;
  exp?: React.ReactNode;
  intexp?: boolean;
  view?: "left" | "middle" | "right" | "inc" | "exp";
  setView?: React.Dispatch<React.SetStateAction<"left" | "middle" | "right" | "inc" | "exp">>;
}
