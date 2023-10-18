export const SearchIcon = (props: CATEGORY_ICON_PROPS_TYPES) => {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
        stroke={props.color ? props.color : 'black'}
        strokeOpacity="0.7"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
export const SearchToggleIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.5554 9.77778C15.5554 10.5142 14.9585 11.1111 14.2221 11.1111C13.4857 11.1111 12.8888 10.5142 12.8888 9.77778C12.8888 9.0414 13.4857 8.44444 14.2221 8.44444C14.9585 8.44444 15.5554 9.0414 15.5554 9.77778Z"
        stroke="black"
        strokeOpacity="0.7"
        strokeWidth="0.888889"
      />
      <line x1="8" y1="9.77778" x2="13.3333" y2="9.77778" stroke="black" strokeOpacity="0.7" strokeWidth="0.888889" />
      <path
        d="M8.44455 14.2222C8.44455 13.4858 9.04151 12.8889 9.77789 12.8889C10.5143 12.8889 11.1112 13.4858 11.1112 14.2222C11.1112 14.9586 10.5143 15.5556 9.77789 15.5556C9.04151 15.5556 8.44455 14.9586 8.44455 14.2222Z"
        stroke="black"
        strokeOpacity="0.7"
        strokeWidth="0.888889"
      />
      <line x1="16" y1="14.2222" x2="10.6667" y2="14.2222" stroke="black" strokeOpacity="0.7" strokeWidth="0.888889" />
      <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#E3E3E3" />
    </svg>
  )
}