let phoneNumbers = [
  ['0434567890', 'Telstra', false],
  ['0434567891', 'Telstra', false],
  ['0434567893', 'Telstra', false],
  ['0444567890', 'Optus', false],
  ['0444567891', 'Optus', false],
  ['0444567893', 'Optus', false],
  ['0454567890', 'Virgin', false],
  ['0454567891', 'Virgin', false],
  ['0454567893', 'Virgin', false],
];

const PhoneNumberIndex = {
  PHONE_NUMBER: 0,
  CUSTOMER: 1,
  ACTIVATED: 2,
};

const { PHONE_NUMBER, CUSTOMER, ACTIVATED } = PhoneNumberIndex;

const PhoneNumberKey = [
  'phoneNumber',
  'customer',
  'activated',
];

class PhoneNumbers {
  static get() {
    return phoneNumbers;
  }

  static setActivated(phoneNumber, activated) {
    let foundIndex = null;
    phoneNumbers = PhoneNumbers.get().map((rec, index) => {
      if (rec[PHONE_NUMBER] === String(phoneNumber)) {
        foundIndex = index;
        return [rec[PHONE_NUMBER], rec[CUSTOMER], activated];
      }
      return rec;
    });
    if (foundIndex === null) {
      return null;
    }
    return phoneNumbers[foundIndex];
  }

  static filterCustomer(customer) {
    if (customer === undefined) {
      return PhoneNumbers.get();
    }
    return PhoneNumbers.get().filter(rec => rec[CUSTOMER] === customer);
  }

  static filterPhoneNumber(phoneNumber) {
    if (phoneNumber === undefined) {
      return PhoneNumbers.get();
    }
    return PhoneNumbers.get().filter(rec => rec[PHONE_NUMBER] === String(phoneNumber));
  }

  static arrayToJson(filteredNumbers) {
    return filteredNumbers.reduce((acc, rec) => {
      acc.push(PhoneNumbers.recordToJson(rec));
      return acc;
    }, []);
  }

  static recordToJson(rec) {
    const json = {};
    json[PhoneNumberKey[PHONE_NUMBER]] = rec[PHONE_NUMBER];
    json[PhoneNumberKey[CUSTOMER]] = rec[CUSTOMER];
    json[PhoneNumberKey[ACTIVATED]] = rec[ACTIVATED];
    return json;
  }
}

module.exports = PhoneNumbers;
