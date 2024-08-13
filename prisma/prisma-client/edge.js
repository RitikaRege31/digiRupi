
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.18.0
 * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
 */
Prisma.prismaVersion = {
  client: "5.18.0",
  engine: "4c784e32044a8a016d99474bd02a3b6123742169"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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

exports.Prisma.BeneficiaryScalarFieldEnum = {
  beneficiaryId: 'beneficiaryId'
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

exports.Prisma.PvtOrgScalarFieldEnum = {
  privateOrgId: 'privateOrgId',
  CompanyName: 'CompanyName',
  positionInCompany: 'positionInCompany'
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

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  USER: 'USER',
  ADMIN: 'ADMIN',
  SUPERADMIN: 'SUPERADMIN'
};

exports.ServiceProviderTag = exports.$Enums.ServiceProviderTag = {
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
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\DigiRupi\\digiRupi\\prisma\\prisma-client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "rhel-openssl-1.0.x"
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "D:\\DigiRupi\\digiRupi\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "5.18.0",
  "engineVersion": "4c784e32044a8a016d99474bd02a3b6123742169",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": null,
        "value": "postgresql://anushthaprakash:Fingals1729@digirupi.cxuovwekb1mq.us-east-1.rds.amazonaws.com:5432/digiRupi_db"
      }
    }
  },
  "inlineSchema": "generator client {\n  provider      = \"prisma-client-js\"\n  output        = \"./prisma-client\"\n  // output        = \".\"\n  binaryTargets = [\"native\", \"rhel-openssl-1.0.x\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = \"postgresql://anushthaprakash:Fingals1729@digirupi.cxuovwekb1mq.us-east-1.rds.amazonaws.com:5432/digiRupi_db\"\n}\n\nmodel Users {\n  id                      String           @id @default(uuid())\n  phoneNumber             String?          @unique\n  firstName               String?\n  recoveryEmail           String?          @unique\n  lastName                String?\n  walletPin               String?\n  salt                    String?\n  bankName                String?\n  bankAccountHolderName   String?\n  accountNumber           String?\n  isBeneficiary           Boolean          @default(false)\n  isPvtOrg                Boolean?         @default(false)\n  isServiceProvider       Boolean?         @default(false)\n  walletIdBeneficiary     String?\n  walletIdPvtOrg          String?\n  walletIdServiceProvider String?\n  createdAt               DateTime         @default(now())\n  role                    Role?            @default(USER)\n  beneficiaryInfo         beneficiary?\n  pvtOrgInfo              pvtOrg?\n  serviceProviderInfo     serviceProvider?\n}\n\nmodel beneficiary {\n  beneficiaryId    String    @id @default(uuid())\n  AvailableVoucher Voucher[]\n  Users            Users     @relation(fields: [beneficiaryId], references: [id])\n}\n\nmodel Voucher {\n  voucherId            String          @id @default(uuid())\n  voucherAmount        Int\n  voucherCreatedAt     DateTime        @default(now())\n  voucherRedeemed      Boolean         @default(false)\n  voucherRedeemedDate  DateTime?\n  voucherSPId          String          @default(uuid())\n  voucherBeneficiaryId String          @default(uuid())\n  PvtOrgById           String          @default(uuid())\n  PvtOrgBy             pvtOrg          @relation(fields: [PvtOrgById], references: [privateOrgId])\n  BeneficiaryUser      beneficiary     @relation(fields: [voucherBeneficiaryId], references: [beneficiaryId])\n  ServiceProviderUser  serviceProvider @relation(fields: [voucherSPId], references: [serviceProviderId])\n}\n\nmodel pvtOrg {\n  privateOrgId      String    @id @default(uuid())\n  VouchersCreated   Voucher[]\n  CompanyName       String?\n  positionInCompany String?\n  Users             Users     @relation(fields: [privateOrgId], references: [id])\n}\n\nmodel serviceProvider {\n  serviceProviderId  String              @id @default(uuid())\n  BusinessName       String?\n  PositionInBusiness String?\n  BusinessTag        ServiceProviderTag?\n  VouchersRequested  Voucher[]\n  Users              Users               @relation(fields: [serviceProviderId], references: [id])\n}\n\nenum Role {\n  USER\n  ADMIN\n  SUPERADMIN\n}\n\nenum ServiceProviderTag {\n  HOSPITALITY\n  HEALTHCARE\n  BUSINESS\n  PENSION\n  AGRICULTURE\n  HOUSEHOLD_UTILITIES\n  CHILDCARE\n  OTHER\n}\n",
  "inlineSchemaHash": "6cb96945413ca7f4ce75aa8f832908d0d1180ba08977391be05cd8add8d212fc",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Users\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recoveryEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"walletPin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"salt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bankName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bankAccountHolderName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isBeneficiary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPvtOrg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isServiceProvider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"walletIdBeneficiary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"walletIdPvtOrg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"walletIdServiceProvider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Role\",\"default\":\"USER\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"beneficiaryInfo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"beneficiary\",\"relationName\":\"UsersTobeneficiary\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pvtOrgInfo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pvtOrg\",\"relationName\":\"UsersTopvtOrg\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serviceProviderInfo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"serviceProvider\",\"relationName\":\"UsersToserviceProvider\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"beneficiary\":{\"dbName\":null,\"fields\":[{\"name\":\"beneficiaryId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AvailableVoucher\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Voucher\",\"relationName\":\"VoucherTobeneficiary\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"UsersTobeneficiary\",\"relationFromFields\":[\"beneficiaryId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Voucher\":{\"dbName\":null,\"fields\":[{\"name\":\"voucherId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"voucherAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"voucherCreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"voucherRedeemed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"voucherRedeemedDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"voucherSPId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"voucherBeneficiaryId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PvtOrgById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PvtOrgBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pvtOrg\",\"relationName\":\"VoucherTopvtOrg\",\"relationFromFields\":[\"PvtOrgById\"],\"relationToFields\":[\"privateOrgId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BeneficiaryUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"beneficiary\",\"relationName\":\"VoucherTobeneficiary\",\"relationFromFields\":[\"voucherBeneficiaryId\"],\"relationToFields\":[\"beneficiaryId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ServiceProviderUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"serviceProvider\",\"relationName\":\"VoucherToserviceProvider\",\"relationFromFields\":[\"voucherSPId\"],\"relationToFields\":[\"serviceProviderId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pvtOrg\":{\"dbName\":null,\"fields\":[{\"name\":\"privateOrgId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VouchersCreated\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Voucher\",\"relationName\":\"VoucherTopvtOrg\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CompanyName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"positionInCompany\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"UsersTopvtOrg\",\"relationFromFields\":[\"privateOrgId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"serviceProvider\":{\"dbName\":null,\"fields\":[{\"name\":\"serviceProviderId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BusinessName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PositionInBusiness\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BusinessTag\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ServiceProviderTag\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VouchersRequested\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Voucher\",\"relationName\":\"VoucherToserviceProvider\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"UsersToserviceProvider\",\"relationFromFields\":[\"serviceProviderId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Role\":{\"values\":[{\"name\":\"USER\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"SUPERADMIN\",\"dbName\":null}],\"dbName\":null},\"ServiceProviderTag\":{\"values\":[{\"name\":\"HOSPITALITY\",\"dbName\":null},{\"name\":\"HEALTHCARE\",\"dbName\":null},{\"name\":\"BUSINESS\",\"dbName\":null},{\"name\":\"PENSION\",\"dbName\":null},{\"name\":\"AGRICULTURE\",\"dbName\":null},{\"name\":\"HOUSEHOLD_UTILITIES\",\"dbName\":null},{\"name\":\"CHILDCARE\",\"dbName\":null},{\"name\":\"OTHER\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {}
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

