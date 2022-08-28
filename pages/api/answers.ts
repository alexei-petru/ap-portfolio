type handlerProps = {
  req: string;
  res: {
    status: (arg0: number) => {
      json: (arg0: Record<string, unknown>) => void;
    };
  };
};

export default function handler(
//   req: handlerProps["req"],
  res: handlerProps["res"]
) {
  res.status(200).json({ name: "John Doe" });
}
