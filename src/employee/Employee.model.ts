export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  tier: EmployeeTier;
  status: string;
}

export enum EmployeeTier {
  TIER_ONE = 1,
  TIER_TWO = 2,
  TIER_THREE = 3,
  TIER_FOUR = 4,
  TIER_FIVE = 5,
}
