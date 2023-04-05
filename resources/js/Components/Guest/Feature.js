import React from 'react'

function Feature(props) {

    const data = JSON.parse(props.lang);
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <p className="text-base text-gray-700 md:text-lg">
                    {data.header[0]} <span className="font-bold text-ap1">AllAcc</span> {data.header[2]} <a target={'_blank'} href="https://github.com/adenlall/AllAcc.tk" className="text-ago">Github</a>
                </p>
            </div>
            <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
                <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
                        <svg
                            className="fill-agr w-12"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 330 330"
                            xmlSpace="preserve"
                        >
                            <path d="M150 135V15c0-8.284-6.716-15-15-15C60.56 0 0 60.561 0 135c0 36.06 14.042 69.961 39.541 95.459a14.953 14.953 0 0010.606 4.393 14.95 14.95 0 0010.606-4.393l84.853-84.853A14.998 14.998 0 00150 135zm-30-6.213l-69.106 69.105C37.333 179.836 30 157.982 30 135c0-52.805 39.183-96.631 90-103.932v97.719zM175.606 184.394c-5.857-5.858-15.355-5.858-21.213 0L69.54 269.246c-5.858 5.857-5.858 15.355-.001 21.213C95.038 315.957 128.939 330 165 330c36.06 0 69.962-14.043 95.459-39.541 5.857-5.858 5.857-15.356 0-21.213l-84.853-84.852zM165 300c-22.983 0-44.837-7.333-62.893-20.895L165 216.213l62.893 62.892C209.837 292.667 187.983 300 165 300zM195 0c-8.284 0-15 6.716-15 15v120c0 3.978 1.581 7.794 4.394 10.606l84.852 84.853a14.953 14.953 0 0010.606 4.393c3.839 0 7.678-1.464 10.607-4.393C315.957 204.961 330 171.06 330 135 330 60.561 269.439 0 195 0zm84.105 197.892L210 128.787V31.068c50.817 7.3 90 51.126 90 103.932 0 22.982-7.333 44.836-20.895 62.892z" />
                        </svg>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5 text-black">{data.items[0].header}</h6>
                    <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                        {data.items[0].sub}
                    </p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
                        <svg
                            className="fill-agr w-12"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 330 330"
                            xmlSpace="preserve"
                        >
                            <path d="M279.662 113.269c-1.207-16.782-6.124-33.548-15.086-49.071-20.483-35.478-58.681-57.516-99.685-57.516-20.079 0-39.93 5.334-57.407 15.424-26.603 15.358-45.631 40.157-53.582 69.828a116.292 116.292 0 00-3.639 21.386C19.941 134.049 0 168.897 0 208.318c0 63.411 51.589 115 115 115 17.908 0 34.873-4.117 50-11.451 15.127 7.333 32.092 11.451 50 11.451 63.411 0 115-51.589 115-115 0-39.454-19.975-74.327-50.338-95.049zm-53.122 67.026c-5.302-21.092-16.443-39.888-31.6-54.563a84.85 84.85 0 0120.061-2.413 84.47 84.47 0 0134.462 7.328c-1.972 18.378-9.885 35.938-22.923 49.648zM165 276.996c-14.947-10.913-26.205-26.573-31.548-44.749a114.636 114.636 0 0031.625 4.468c10.659 0 21.251-1.518 31.462-4.438-5.347 18.164-16.6 33.813-31.539 44.719zM91.371 164.198c-6.04-10.462-9.695-21.845-10.932-33.508A84.483 84.483 0 01115 123.318c6.91 0 13.624.849 20.061 2.413-15.161 14.679-26.305 33.479-31.604 54.578a84.448 84.448 0 01-12.086-16.111zm108.153 35.16c-10.843 4.827-22.593 7.357-34.447 7.357-12.099 0-23.862-2.601-34.599-7.384 2.586-24.482 15.609-45.885 34.521-59.691 18.92 13.811 31.947 35.225 34.525 59.718zM122.483 48.087c12.923-7.461 27.587-11.405 42.407-11.405 30.321 0 58.564 16.291 73.705 42.516a84.842 84.842 0 017.92 18.511 114.702 114.702 0 00-31.516-4.391c-17.908 0-34.873 4.117-50 11.451-15.127-7.334-32.092-11.451-50-11.451a114.713 114.713 0 00-31.536 4.396c6.18-21.045 19.957-38.621 39.02-49.627zM115 293.318c-46.869 0-85-38.131-85-85 0-22.655 8.927-43.252 23.426-58.504a115.492 115.492 0 0011.965 29.384c8.775 15.2 20.811 27.924 34.917 37.514 2.104 29.027 15.03 55.098 34.753 74.193A84.857 84.857 0 01115 293.318zm100 0c-6.91 0-13.624-.849-20.061-2.413 19.709-19.083 32.633-45.132 34.749-74.137 24.018-16.323 40.095-40.503 46.771-67.074 14.566 15.264 23.54 35.909 23.54 58.624.001 46.869-38.13 85-84.999 85z" />
                        </svg>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5 text-black">{data.items[1].header}</h6>
                    <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                        {data.items[1].sub}
                    </p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
                        <svg
                            className="fill-agr w-12"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 359.967 359.967"
                            xmlSpace="preserve"
                        >
                            <path d="M269.967 136.038V89.996c0-22.002-15.426-41.832-43.436-55.836-24.705-12.352-57.217-19.155-91.547-19.155-34.334 0-66.847 6.803-91.551 19.155C15.425 48.164 0 67.994 0 89.996V269.97c0 22.003 15.425 41.832 43.434 55.837 24.704 12.352 57.217 19.154 91.551 19.154 26.155 0 51.089-3.902 72.629-11.302 14.236 7.224 30.327 11.302 47.354 11.302 57.897 0 105-47.103 105-105-.001-52.804-39.184-96.622-90.001-103.923zM30 198.013c4.091 2.765 8.567 5.378 13.434 7.811 24.704 12.352 57.218 19.155 91.551 19.155 5.414 0 10.796-.179 16.128-.516a105.498 105.498 0 00-1.146 15.499c0 4.899.345 9.72.998 14.442a224.76 224.76 0 01-15.98.566C74.897 254.971 30 231.217 30 209.979v-11.966zm130.833-4.53a221.616 221.616 0 01-25.849 1.495C74.897 194.979 30 171.226 30 149.988v-11.966c4.091 2.765 8.567 5.378 13.434 7.81 24.704 12.353 57.218 19.155 91.551 19.155 18.472 0 36.403-1.986 52.89-5.73a105.661 105.661 0 00-27.042 34.226zM134.984 45.005c60.086 0 104.982 23.753 104.982 44.991s-44.896 44.992-104.982 44.992C74.897 134.988 30 111.234 30 89.996c0-21.238 44.897-44.991 104.984-44.991zM30 269.971v-11.965c4.091 2.765 8.567 5.377 13.434 7.81 24.704 12.352 57.217 19.155 91.551 19.155 8.28 0 16.502-.407 24.573-1.194a105.363 105.363 0 0017.943 26.99c-13.367 2.737-27.84 4.195-42.517 4.195C74.897 314.962 30 291.208 30 269.971zm224.967 44.991c-41.355 0-75-33.645-75-75 0-41.238 33.457-74.802 74.652-74.991.117.003.23.018.348.018s.23-.015.348-.018c41.195.189 74.652 33.753 74.652 74.991 0 41.355-33.645 75-75 75z" />
                        </svg>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5 text-black">{data.items[2].header}</h6>
                    <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                        {data.items[2].sub}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Feature;
