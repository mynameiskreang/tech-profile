export interface AppDto {
  frontend: InfoData;
  backend: InfoData;
  database: InfoData;
  tools: InfoData;
}

export interface InfoData {
  description: string;
  data: object;
}
