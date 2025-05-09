/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/api/userManager/v0/user/{uuid}/expert/generalInformation": {
    post: {
      parameters: {
        path: {
          /** User UUID */
          uuid: string;
        };
        body: {
          form?: {
            /** @description Short bio */
            shortBio?: string;
            /** @description Professional background */
            professionalBackground?: string;
            /** @description Services */
            services?: string;
            spokenLanguages?: number[];
          };
        };
      };
      responses: {
        /** Successful operation */
        200: {
          schema: definitions["User"];
        };
      };
    };
  };
  "/api/userManager/v0/user/{uuid}/expert/medicalNumbers": {
    post: {
      parameters: {
        path: {
          /** User UUID */
          uuid: string;
        };
        body: {
          form?: {
            /** @description Lifelong doctr number (LANR) */
            doctorNumber?: string;
            /** @description Business location number (BSNR) */
            locationNumber?: boolean;
          };
        };
      };
      responses: {
        /** Successful operation */
        200: {
          schema: definitions["User"];
        };
      };
    };
  };
  "/api/userManager/v0/user/{uuid}/expert/categories": {
    post: {
      parameters: {
        path: {
          /** User UUID */
          uuid: string;
        };
        body: {
          form?: {
            categories?: number[];
          };
        };
      };
      responses: {
        /** Successful operation */
        200: {
          schema: definitions["User"];
        };
      };
    };
  };
  "/api/userManager/v0/user/{uuid}/expert/searchSettings": {
    post: {
      parameters: {
        path: {
          /** User UUID */
          uuid: string;
        };
        body: {
          form?: {
            /** @description Visibility in the platform search results */
            searchable?: boolean;
            /** @description Visibility in the search engines results */
            allowSeoIndex?: boolean;
          };
        };
      };
      responses: {
        /** Successful operation */
        200: {
          schema: definitions["User"];
        };
      };
    };
  };
  "/api/userManager/v0/user/{uuid}/expert/ratesAndBilling": {
    post: {
      parameters: {
        body: {
          form?: {
            /** @description Allow recording of calls */
            allowCallArchiving?: boolean;
            /** @description Allow personal chat */
            allowMessaging?: boolean;
            /** @description Allows user to be reachable for other users by a video/audio consultation */
            providesRegularOneToOneCallServices?: boolean;
            /** @description NET rate per time unit */
            pricePerTimeUnit?: unknown;
            /** @description Free minutes at the beginning of the call */
            freeMinutes?: number;
            /** @description Video advice - statutory insured */
            providesCallRequestFromExpertServices?: boolean;
            /** @description Provides services with predefined calculation scheme */
            providesServiceWithPredefinedCalculationScheme?: boolean;
            /** @description Expert's private insurance multiplier */
            privateInsuranceMultiplicator?: unknown;
            /** @description Who will receive money: Expert or organization */
            moneyReceiverType?: number;
          };
        };
        path: {
          uuid: string;
        };
      };
      responses: {
        /** Returned when successful */
        200: {
          schema: definitions["User"];
        };
      };
    };
  };
  "/api/userManager/v0/user": {
    put: {
      parameters: {
        body: {
          /** JSON body */
          body: {
            /** @description E-mail */
            email: string;
            /** @description Interface language */
            language: string;
            /** @description First name */
            firstName: string;
            /** @description Last name */
            lastName: string;
            /** @description External ID */
            externalId?: string;
            /**
             * @description true - if the email has been verified,
             *     false - if system should send out a verification link to the user (default: false)
             */
            emailVerified?: boolean;
            /**
             * @description true - the system send out a email to the user to reset/change the password,
             *     false - system will do nothing (default: false)
             */
            passwordResetRequired?: boolean;
            /**
             * @description if `true` system will require additional actions to activate created user.
             *     Flag `passwordResetRequired` will be ignored for migration flow
             */
            isMigration?: boolean;
            /** @description User password, the random password will be used if empty */
            password?: string;
            /** @description Country of residence (ISO 3166-1 alpha-2) */
            country: string;
            /** @description Birthday (YYYY-MM-DD), must be at least 18 years old */
            birthday?: string;
          };
        };
      };
      responses: {
        /** Successful operation */
        201: {
          schema: definitions["User"];
        };
        /**
         * User already exists,
         *       Not allowed to request a password reset and email verification at the same time
         */
        400: unknown;
      };
    };
  };
  "/api/userManager/v0/user/findByEmail": {
    get: {
      parameters: {
        query: {
          /** E-mail of the user to find */
          email: string;
        };
      };
      responses: {
        /** Successful operation */
        200: {
          schema: definitions["User"];
        };
        /** Not found */
        404: unknown;
      };
    };
  };
  "/api/userManager/v0/user/findByExternalId": {
    /** If you want to use this endpoint, please contact XPERTyme. */
    get: {
      parameters: {
        query: {
          /** User external id */
          externalId: string;
        };
      };
      responses: {
        /** Successful operation */
        200: {
          schema: definitions["User"];
        };
        /** Data source type mismatch */
        403: unknown;
        /** User not found */
        404: unknown;
      };
    };
  };
  "/api/userManager/v0/user/exists": {
    /** If you want to use this endpoint, please contact XPERTyme. */
    get: {
      parameters: {
        query: {
          /** User email */
          email: string;
        };
      };
      responses: {
        /** User exists */
        200: unknown;
        /** Data source type mismatch */
        403: unknown;
        /** User not found */
        404: unknown;
      };
    };
  };
  "/api/userManager/v0/user/{uuid}": {
    get: {
      parameters: {
        path: {
          /** User UUID */
          uuid: string;
        };
      };
      responses: {
        /** Returned when successful */
        200: {
          schema: {
            /** @description Unique number of expert user */
            uuid?: string;
            /** @description External ID, can be used to identify users by external applications */
            externalId?: string;
            /** @description First name of expert user */
            firstName?: string;
            /** @description Last name of expert user */
            lastName?: string;
            /** @description Spoken languages id numbers */
            spokenLanguages?: number[];
            /** @description User photo link */
            croppedPhoto?: string;
            /** @description Expert's academic degree description */
            academicDegree?: string;
            /** @description Expert's organization ID */
            organizationId?: number;
            /** @description Expert's unique calendar id string */
            calendarId?: string;
            salutation?: {
              /** @description Salutation unique number */
              id?: number;
              translations?: {
                /** @description Language code for salutation (ISO 639-1) */
                locale?: string;
                /** @description Salutation name */
                name?: string;
              }[];
            };
            academicTitle?: {
              /** @description Academic title unique number */
              id?: number;
              translations?: {
                /** @description Language code for academic title (ISO 639-1) */
                locale?: string;
                /** @description Academic title name */
                name?: string;
              }[];
            };
            expert?: {
              generalInformation?: {
                /** @description About expert */
                professionalBackground?: string;
                /** @description Short bio */
                shortBio?: string;
                /** @description Expert service description */
                services?: string;
              };
              categories?: {
                /** @description Category ID */
                id?: number;
                /** @description Category translations */
                translations?: {
                  /** @description Category description */
                  description?: string;
                  /** @description Translation locale */
                  locale?: string;
                  /** @description Category name */
                  name?: string;
                }[];
              }[];
            };
          };
        };
        /** User has not been found */
        400: unknown;
        /** Not found */
        404: unknown;
      };
    };
    delete: {
      parameters: {
        path: {
          /** User UUID */
          uuid: string;
        };
        query: {
          /** Use soft or permanent deletion */
          softDelete?: boolean;
        };
      };
      responses: {
        /** Not found */
        404: unknown;
        /** Resource have dependencies */
        409: unknown;
        /** Resource already deleted */
        410: unknown;
        /** Unprocessable entity */
        422: unknown;
      };
    };
  };
  "/api/userManager/v0/user/{uuid}/baseInformation": {
    patch: {
      parameters: {
        path: {
          /** User UUID */
          uuid: string;
        };
        body: {
          body?: {
            /** @description User's first name */
            firstName?: string;
            /** @description User's last name */
            lastName?: string;
            /**
             * @description Any external id which will be added to any user result call,
             *     can be used to identify users by external applications
             */
            externalId?: string;
            /** @description User's email */
            email?: string;
            /** @description User's phone */
            phone?: string;
            /** @description User's gender code */
            genderCode?: string;
            /** @description User's birthday (YYYY-MM-DD) */
            birthday?: string;
          };
        };
      };
      responses: {
        /** Successful operation */
        200: {
          schema: definitions["User"];
        };
      };
    };
  };
  "/api/userManager/v0/user/{uuid}/upgradeSeekerToExpert": {
    post: {
      parameters: {
        path: {
          /** User UUID */
          uuid: string;
        };
      };
      responses: {
        /** Successful operation */
        200: {
          schema: definitions["User"];
        };
      };
    };
  };
}

export interface definitions {
  User: {
    uuid?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    salutation?: definitions["Salutation"];
    academicTitle?: definitions["AcademicTitle"];
    isExpert?: boolean;
    externalId?: string;
  };
  Salutation: {
    id?: number;
    /** Translations */
    translations?: definitions["SalutationTranslation"][];
  };
  AcademicTitle: {
    id?: number;
    /** Translations */
    translations?: definitions["AcademicTitleTranslation"][];
  };
  SalutationTranslation: {
    locale?: string;
    name?: string;
  };
  AcademicTitleTranslation: {
    locale?: string;
    name?: string;
  };
}

export interface operations {}

export interface external {}
