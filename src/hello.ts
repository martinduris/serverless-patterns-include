class Hello {

  public async handler(): Promise<any> {
    return {
      statusCode: 200,
      body: null
    }
  }

}

export const handler = new Hello().handler;
