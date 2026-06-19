const stats = [
  {
    title: "Total Products",
    value: "1,284",
    color: "cyan",
  },
  {
    title: "Current Products",
    value: "1,240",
    color: "blue",
  },
  {
    title: "Deleted Products",
    value: "44",
    color: "red",
  },
];

export default function DashboardCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">

      {stats.map((item) => (
        <div
          key={item.title}
          className="glass-card rounded-xl p-6"
        >
          <h3 className="text-gray-400">
            {item.title}
          </h3>

          <p className="text-5xl font-bold mt-2">
            {item.value}
          </p>
        </div>
      ))}

    </div>
  );
}