export enum PositionType {
  Sell = 'Sell',
  Buy = 'Buy',
}

export enum LegTgSLType {
  Points = 'Points',
  Percentage = 'Percentage',
  UnderlyingPercentage = 'Underlying Percentage',
}

export interface LegStopLoss {
  Type: LegTgSLType
  Value: number
}

export enum TrailStopLossType {
  Percentage = 'Percentage',
  Points = 'Points',
  None = 'None',
}

export interface LegTrailSL {
  Type: TrailStopLossType
  Value: {
    intrumentMove: number
    stopLossMove: number
  }
}
export enum MomentumType {
  PointsUp = 'PointsUp',
  PointsDown = 'PointsDown',
}
export enum ExpiryType {
  Weekly = 'Weekly',
  Monthly = 'Monthly',
}

export enum EntryType {
  EntryByPremium = 'Premium',
  EntryByStrikeType = 'Strike Type',
  EntryByPremiumRange = 'Premium Range',
  EntryByStraddleWidth = 'Straddle Width',
}

export enum StrikeType {
  ATM = 'ATM',
  OTM1 = 'OTM1',
}

export interface PremiumRangeParameter {
  Lower: number
  Upper: number
}

export interface StraddleWidthParameter {
  Adjustment: 'Plus' | 'Minus'
  Multiplier: number
}

export enum LegType {
  CE = 'CE',
}

export enum ReentryType {
  ASAP = 'ASAP',
  ASAPReverse = 'ASAPReverse',
}

export interface LegMomentum {
  Type: MomentumType
  Value: number
}
export interface LegReentrySL {
  Type: ReentryType
  Value: number
}
export interface LegReentryTP {
  Type: ReentryType
  Value: number
}

export interface Leg {
  PositionType: PositionType
  Lots: number
  LogStopLoss: LegStopLoss
  LegTarget: LegStopLoss
  LegTrailSL: LegTrailSL
  LegMomentum: LegMomentum
  ExpiryKind: ExpiryType
  EntryType: EntryType
  StrikeParameter:
    | StrikeType
    | number
    | PremiumRangeParameter
    | StraddleWidthParameter
  InstrumentKind: LegType
  LegReentrySL: LegReentrySL
  LegReentryTP: LegReentryTP
}
