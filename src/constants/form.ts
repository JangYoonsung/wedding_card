export const ATTENDANCE_STATUS = { PRESENT: 'attendance', ABSENT: 'absent' } as const;

export const ATTENDANCE_STATUSES = [ATTENDANCE_STATUS.PRESENT, ATTENDANCE_STATUS.ABSENT];

export const FIELD_NAMES = {
  attendanceStatus: '出欠席',
  firstName: 'お名前',
  firstNameKana: 'フリガナ',
  tel: '電話番号',
  email: 'メールアドレス',
  zipCode: '郵便番号',
  address1: '住所1',
  address2: '住所2',
  memo: 'メモー（アレルギー等）',
  isAccompanied: 'お連れ様',
  companionInfo: 'お疲れ様情報',
  createdAt: '登録日',
} as const;
