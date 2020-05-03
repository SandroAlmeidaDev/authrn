interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'sdaiwhefiajhwsdfjasikodjnhfiaohsnkvfcnksnvfknefikwnefkjsdjubfhdbvfh',
        user: {
          name: 'Sandro',
          email: 'sandro.almeida.silva17@gmail.com',
        },
      });
    }, 1000);
  });
}