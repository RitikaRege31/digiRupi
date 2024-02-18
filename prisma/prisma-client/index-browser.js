
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.15.0
 * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
 */
Prisma.prismaVersion = {
  client: "4.15.0",
  engine: "8fbc245156db7124f997f4cecdd8d1219e360944"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.BeneficiaryScalarFieldEnum = {
  beneficiaryId: 'beneficiaryId'
};

exports.Prisma.PvtOrgScalarFieldEnum = {
  privateOrgId: 'privateOrgId',
  CompanyName: 'CompanyName',
  positionInCompany: 'positionInCompany'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.ServiceProviderScalarFieldEnum = {
  serviceProviderId: 'serviceProviderId',
  BusinessName: 'BusinessName',
  PositionInBusiness: 'PositionInBusiness',
  BusinessTag: 'BusinessTag'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  phoneNumber: 'phoneNumber',
  firstName: 'firstName',
  recoveryEmail: 'recoveryEmail',
  lastName: 'lastName',
  walletPin: 'walletPin',
  salt: 'salt',
  bankName: 'bankName',
  bankAccountHolderName: 'bankAccountHolderName',
  accountNumber: 'accountNumber',
  isBeneficiary: 'isBeneficiary',
  isPvtOrg: 'isPvtOrg',
  isServiceProvider: 'isServiceProvider',
  walletIdBeneficiary: 'walletIdBeneficiary',
  walletIdPvtOrg: 'walletIdPvtOrg',
  walletIdServiceProvider: 'walletIdServiceProvider',
  createdAt: 'createdAt',
  role: 'role'
};

exports.Prisma.VoucherScalarFieldEnum = {
  voucherId: 'voucherId',
  voucherAmount: 'voucherAmount',
  voucherCreatedAt: 'voucherCreatedAt',
  voucherRedeemed: 'voucherRedeemed',
  voucherRedeemedDate: 'voucherRedeemedDate',
  voucherSPId: 'voucherSPId',
  voucherBeneficiaryId: 'voucherBeneficiaryId',
  PvtOrgById: 'PvtOrgById'
};
exports.Role = {
  USER: 'USER',
  ADMIN: 'ADMIN',
  SUPERADMIN: 'SUPERADMIN'
};

exports.ServiceProviderTag = {
  HOSPITALITY: 'HOSPITALITY',
  HEALTHCARE: 'HEALTHCARE',
  BUSINESS: 'BUSINESS',
  PENSION: 'PENSION',
  AGRICULTURE: 'AGRICULTURE',
  HOUSEHOLD_UTILITIES: 'HOUSEHOLD_UTILITIES',
  CHILDCARE: 'CHILDCARE',
  OTHER: 'OTHER'
};

exports.Prisma.ModelName = {
  Users: 'Users',
  beneficiary: 'beneficiary',
  Voucher: 'Voucher',
  pvtOrg: 'pvtOrg',
  serviceProvider: 'serviceProvider'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
