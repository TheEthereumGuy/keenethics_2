// eslint-disable
import React from 'react';
import PropTypes from 'prop-types';

const RocketIcon = ({ className }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M27.9521 6.3347C30.2007 8.59195 31.6998 11.4991 32.224 14.6445C32.7309 17.6773 32.289 20.879 30.9719 23.6562C29.4512 26.8666 26.8213 29.4834 23.6066 30.9912C20.8338 32.2953 17.6407 32.7242 14.6209 32.2129C11.4711 31.68 8.54668 30.168 6.2981 27.8977C4.12316 25.7055 2.65876 22.8807 2.1042 19.8392C1.57563 16.9191 1.92223 13.817 3.10502 11.0918C4.35279 8.21502 6.48006 5.74981 9.15757 4.10778C11.7311 2.53073 14.7509 1.75088 17.7707 1.87219C20.8078 1.9935 23.7669 3.03764 26.2148 4.83997C26.8343 5.29056 27.4106 5.79313 27.9521 6.3347C28.3464 6.72896 28.9616 6.11807 28.563 5.72381C26.2581 3.42757 23.2816 1.84619 20.0799 1.2613C16.9258 0.689403 13.6634 1.062 10.7216 2.32277C7.69751 3.62253 5.11098 5.88412 3.38663 8.68294C1.7186 11.3908 0.886756 14.5925 1.0124 17.7639C1.13804 20.97 2.22118 24.1198 4.13183 26.6976C6.14646 29.4185 8.9756 31.4764 12.2033 32.5162C15.2924 33.5084 18.6848 33.543 21.7912 32.6072C25.3526 31.5371 28.4634 29.2278 30.5473 26.1517C32.3886 23.4266 33.3505 20.1382 33.2898 16.8541C33.2291 13.5614 32.1503 10.299 30.2007 7.6388C29.7025 6.96292 29.1566 6.3217 28.563 5.72381C28.1687 5.32522 27.5579 5.94044 27.9521 6.3347Z" fill="#12233D" />
    <path d="M29.6593 26.5356C30.0796 26.9558 30.4999 27.3761 30.9201 27.7963C31.8733 28.7495 32.8264 29.7027 33.7796 30.6558C34.8194 31.6956 35.8592 32.7354 36.899 33.7752C37.5662 34.4425 38.2334 35.1097 38.9006 35.7769C39.0393 35.9155 39.2472 36.0585 39.0826 36.2708C38.9916 36.3878 38.8617 36.4917 38.7577 36.5957C38.528 36.8253 38.3028 37.0506 38.0731 37.2803C37.5792 37.7742 37.0853 38.2681 36.5957 38.7577C36.4354 38.918 36.1971 39.2776 35.9545 39.0609C35.4216 38.5887 34.9364 38.0428 34.4338 37.5402C33.4416 36.5481 32.4495 35.5559 31.4573 34.5638C30.4392 33.5456 29.4167 32.5231 28.3986 31.505C27.8093 30.9158 27.2158 30.3222 26.6266 29.733C26.5962 29.7027 26.5702 29.6767 26.5399 29.6463C26.5096 29.8716 26.4836 30.1012 26.4533 30.3265C27.9567 29.2521 29.2564 27.9523 30.3396 26.4489C30.4782 26.2583 30.3742 25.968 30.1836 25.8554C29.967 25.7297 29.7287 25.8207 29.59 26.0113C28.5979 27.3847 27.3848 28.5979 26.0113 29.59C25.7904 29.7503 25.7124 30.0579 25.9247 30.2702C26.3579 30.7035 26.7955 31.1411 27.2288 31.5743C28.2166 32.5621 29.2088 33.5543 30.1966 34.5421C31.2451 35.5906 32.2979 36.6434 33.3463 37.6919C33.9789 38.3244 34.6114 38.957 35.244 39.5895C35.2786 39.6242 35.3176 39.6632 35.3523 39.6978C35.7899 40.1051 36.4441 40.0964 36.8817 39.6892C37.2326 39.3642 37.5576 39.0133 37.8955 38.6753C38.3937 38.1771 38.8963 37.6745 39.3946 37.1763C39.4942 37.0766 39.5982 36.9813 39.6935 36.8773C40.0964 36.4397 40.1051 35.7899 39.6978 35.3479C39.2602 34.8757 38.7837 34.4338 38.3288 33.9789C37.3366 32.9867 36.3444 31.9946 35.3523 31.0024C34.3038 29.9539 33.251 28.9011 32.2025 27.8527C31.5873 27.2374 30.9721 26.6222 30.3569 26.007C30.3266 25.9767 30.2962 25.9463 30.2659 25.916C29.8803 25.5261 29.2651 26.1413 29.6593 26.5356Z" fill="#12233D" />
  </svg>
);
RocketIcon.propTypes = {
  className: PropTypes.string,
};
RocketIcon.defaultProps = {
  className: '',
};

export default RocketIcon;
