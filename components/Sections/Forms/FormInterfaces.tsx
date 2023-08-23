export interface FormItemConfig {
  // 1. Control
  control: any
  type: FormItemType
  name: string
  label?: string
  placeholder?: string
  description?: string
  // 2. Type
  // 3. Name
  // 3. Label
  // 4. Placeholder?
  // 5. Description?
}

export enum FormItemType {
  Text,
  Date,
  Select,
  NumberOfDollars,
}
