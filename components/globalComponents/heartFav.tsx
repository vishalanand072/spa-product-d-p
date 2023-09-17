export interface HeartCheckboxProps {
  disabled?: boolean;
  defaultChecked?: boolean;
  id: string;
  label: string;
}

const HeartFav = (props: HeartCheckboxProps) => (
  <div className="flex gap-2" style={{ width: "50px" }}>
    <input
      className="peer relative appearance-none shrink-0 w-8 h-8 mt-1"
      type="checkbox"
      {...props}
    />

    <svg
      className="absolute w-8 h-8 pointer-events-none stroke-black fill-none peer-checked:!fill-red-500 mt-1"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke-width="0.72"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path>
      </g>
    </svg>
    <label htmlFor={props.id}>{props.label}</label>
  </div>
);

export default HeartFav;
