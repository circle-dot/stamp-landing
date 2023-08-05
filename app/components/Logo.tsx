import * as React from "react"

const SvgComponent = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={147}
        height={148}
        fill="none"
        {...props}
        className="heart"
    >
        <g fill="#FDE884" clipPath="url(#a)">
            <path
                fillRule="evenodd"
                d="m33.089 12.355 8.949-6.815c2.107-.096 4.24-.834 6.368-1.57 1.577-.545 3.152-1.09 4.712-1.372C63.956.636 77.613-.787 88.49 1.672c6.33 1.432 12.509 3.124 18.021 6.687 1.165.753 2.494 1.896 3.889 3.096 2.623 2.256 5.481 4.713 7.922 5.16l5.114 3.834 9.801 10.649c.784 3.271 4.687 9.735 7.245 11.927.31 1.71 1.15 3.34 1.993 4.975.673 1.307 1.348 2.617 1.754 3.97 2.157 7.197 3.248 17.245 2.573 24.707-.507 5.604-2.379 11.4-4.423 16.629-.353.904-.801 1.851-1.259 2.822-1.074 2.276-2.209 4.681-2.343 6.959l-6.855 11.453-12.748 13.679c-2.697-.1-5.792 2.784-8.585 5.388-1.528 1.425-2.967 2.765-4.2 3.486-.359.21-.887.407-1.449.617-1.311.489-2.812 1.049-2.812 2.01l-3.836 2.556-8.95 3.833-22.281 1.567-17.777-3.843-8.097-3.261-1.279-.852c-2.5-2.908-9.13-8.541-12.785-9.371L20 124.225l-7.366-7.507-2.785-4.686-4.034-8.093c.018-2.085-.836-4.185-1.685-6.274-.58-1.427-1.158-2.848-1.454-4.254C1.28 86.78.428 79.198.297 72.417.145 64.543 2.07 56.507 4.175 48.99c.278-.989.71-1.963 1.143-2.936.572-1.287 1.143-2.57 1.349-3.88l2.13-3.834 9.57-14.02 7.903-6.427 1.705-1.278 2.13-1.704 2.984-2.556Zm29.029-5.548c2.534-.163 5.075-.326 7.62-.66 37.657-4.942 72.303 30.292 72.303 67.122 0 7.003-2.374 13.566-4.789 20.02-6.121 16.364-15.009 27.222-29.585 36.918-.983.654-1.982 1.336-2.997 2.029-6.235 4.257-13.067 8.921-20.442 9.917-12.582 1.699-26.765 1.114-38.355-4.678-4.628-2.313-8.672-5.616-12.681-8.889a274.12 274.12 0 0 0-3.087-2.496l-.958-.758c-5.075-4.011-9.928-7.847-13.64-13.3-16.78-24.652-13.97-62.615 6.115-84.341 1.967-2.128 4.324-3.813 6.68-5.497 1.187-.847 2.373-1.695 3.508-2.598 1.015-.808 2.018-1.65 3.024-2.494 3.897-3.27 7.847-6.584 12.744-8.142 4.805-1.528 9.659-1.84 14.54-2.153Z"
                clipRule="evenodd"
            />
            <path
                stroke="#FDE884"
                strokeWidth={2}
                d="M74 66.85c5.333 0 8 2.433 8 7.3s-2.667 7.3-8 7.3-8-2.433-8-7.3 2.667-7.3 8-7.3Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#FDE884" d="M0 0h147v148H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default SvgComponent
