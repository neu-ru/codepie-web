export const POSITION_CODE_TO_LABEL: { [key in string]: string } = {
  front: '프론트엔드',
  back: '백엔드',
  infra: '인프라',
  mobile: '모바일',
  android: '안드로이드',
  ios: 'IOS',
} as const;

export const POSITION_LABEL_TO_CODE = Object.fromEntries(
  Object.entries(POSITION_CODE_TO_LABEL).map(([key, value]) => [value, key])
);

export const TECH_STACK_CODE_TO_LABEL: { [key in string]: string } = {
  vanila_web: 'HTML, CSS, JS',
  nodejs: 'Node.js',
  python: 'Python',
  cpp: 'C++',
  android: 'Android',
  ios: 'IOS',
} as const;

export const TECH_STACK_LABEL_TO_CODE = Object.fromEntries(
  Object.entries(TECH_STACK_CODE_TO_LABEL).map(([key, value]) => [value, key])
);
