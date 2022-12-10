export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const post = (url: string, body: string) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  }).then((res) => {
    if (!res.ok) {
      throw new Error(
        ERROR_MESSAGE[res.status] ?? '잠시 후 다시 시도하여주세요'
      );
    }
    return res.json();
  });

export const ERROR_MESSAGE: { [key in number]: string } = {
  400: '잘못된 요청입니다',
  409: '이미 등록되었습니다',
} as const;
