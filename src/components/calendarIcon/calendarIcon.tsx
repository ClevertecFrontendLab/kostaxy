import Icon, { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CalendarIcon = () => {

  const CalendarSvg = () => (
    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.23437 1.51575H10.5312C10.7732 1.51575 10.9687 1.71125 10.9687 1.95325V11.0314C10.9687 11.2734 10.7732 11.4689 10.5312 11.4689H0.46875C0.226758 11.4689 0.03125 11.2734 0.03125 11.0314V1.95325C0.03125 1.71125 0.226758 1.51575 0.46875 1.51575H2.76562V0.640747C2.76562 0.580591 2.81484 0.531372 2.875 0.531372H3.64062C3.70078 0.531372 3.75 0.580591 3.75 0.640747V1.51575H7.25V0.640747C7.25 0.580591 7.29922 0.531372 7.35937 0.531372H8.125C8.18516 0.531372 8.23437 0.580591 8.23437 0.640747V1.51575ZM1.01562 10.4845H9.98437V5.28918H1.01562V10.4845Z" fill="#2F54EB" />
    </svg>

  );

  const CalendarIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={CalendarSvg} {...props} />
  );

  return (
    <CalendarIcon />
  );
};

export default CalendarIcon

