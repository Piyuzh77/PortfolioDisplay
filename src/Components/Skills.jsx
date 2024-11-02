import Card from "./Cards/Card";

function Skills({ theme, skills }) {
  const isDark = theme === "dark";

  return (
    <>
      <div
        className={`${
          !isDark ? "bg-darkNav " : "bg-light "
        } container p-6 flex flex-row flex-wrap group max-w-7xl mx-auto mb-6 rounded-lg`}
      >
       <h1
          className={`text-xl font-extrabold ${
            isDark ? "text-darkNav" : "text-lightBlue"
          } px-4 container m-auto rounded-lg `}
        >
          Skills
        </h1>
        {skills.map((item, index) => {
          return (
            <div key={index} className="p-1 m-auto flex ">
              <Card theme={theme} items={item} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Skills;
