export type Reducer<State, Action = State, Output = State> = (state: State, action: Action) => Output
