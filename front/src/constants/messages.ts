const ERROR_MESSAGES = {
  INVALID_TRIM_BLANK: "불필요한 공백이 포함되어 있습니다.",
  INVALID_DOUBLE_BLANK: "빈칸이 두개 이상 포함되어 있습니다.",
  INVALID_MONTH: "카드의 유효한 유효기간(월)을 입력해주세요.",
  INVALID_YEAR: "카드의 유효한 유효기간(년도)을 입력해주세요.",
  INVALID_ONLY_NUMBER: "숫자만 입력해주세요.",
  INVALID_ONLY_UPPERCASE: "영대문자로만 입력해주세요.",
  INVALID_CARD_NUMBER_LENGTH: "카드 번호를 4자리씩 입력해주세요.",
  INVALID_LENGTH: "정보가 모두 입력되지 않았습니다.",
  INVALID_CARD_COMPANY: "등록되지 않은 카드사입니다.",
  INVALID_EMAIL: "유효한 이메일 주소를 입력해주세요.",
  INVALID_PASSWORD: "비밀번호는 영문, 숫자, 특수문자 중 2종류 이상을 조합하여 최소 10자리 이상이어야 합니다.",
  INVALID_PASSWORD_CONFIRM: "비밀번호가 일치하지 않습니다.",
} as const;


export {ERROR_MESSAGES}