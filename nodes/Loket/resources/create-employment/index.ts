import type { INodeProperties } from 'n8n-workflow';

export const createEmploymentDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Create Employment"
					]
				}
			},
			"options": [
				{
					"name": "Post Transition Compensation Employment By Employment ID",
					"value": "Post Transition Compensation Employment By Employment ID",
					"action": "Create transition compensation employment for existing employment",
					"description": "__Activity name :__ PostTransitionCompensationEmploymentByEmploymentId\n\nCreate an additional employment for an already existing and terminated employment with the sole purpose to pay out a transition compensation.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/transitioncompensation"
						}
					}
				},
				{
					"name": "Post Employment By Employee ID",
					"value": "Post Employment By Employee ID",
					"action": "Create employment for existing employee",
					"description": "__Activity name :__ PostEmploymentByEmployeeId\n\nCreate an additional employment for an already existing employee.\n\nPlease note that the creation of an Employment is not RESTful by design.\n\nIn Loket, when a new Employee is created it will have to be created including its underlying Employment and its accessory resources. This specific endpoint is relevant in the following scenario: there is already an Employee with at least one Employment, and one wishes to create an additional Employment for that currently existing Employee. When successfully calling this endpoint, an Employment with its accessory resources will be created.\n\n__Metadata :__ \n* Possible options (metadata) for generic fields of the type \"metadata\" can be acquired (GET) by adding `/metadata` to the URL.\n* Possible options dependent on a specific payrollAdministration can be acquired by adding `/metadata/payrolladministration/{payrollAdministrationId}` to the url.\n* Possible options for payGrade can be acquired by adding `metadata/payrolladministration/{payrollAdministrationId}/payscale/{payScaleKey}` to the url.\n\nA `payGrade` has time based values dictating the wage for a given period. These values can be acquired by performing another metadata request by adding `/metadata/payrolladministration/{payrollAdministrationId}/payscale/{payScaleKey}/paygrade/{payGradeKey}` to the url. This endpoint has the optional parameter \"date\" that may be used to specifying a measure date.\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults` to the URL. \n\n        \nDefault values that are dependent on the selected payroll administration can be acquired by adding `../providers/employers/employees/employments/defaults/payrolladministration/{payrollAdministrationId}` to the URL.\n\n__NonPayrollAdministrations__ For nonPayrollAdministrations the equivalent metaData-endpoints are also available as described above.  Also, a defaults endpoint is available for the nonPayrollAdministration.  Please note that this requires `../nonpayrolladministrations/{nonPayrollAdministrationId}` in the path.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/employments"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/transitioncompensation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Create Employment"
					],
					"operation": [
						"Post Transition Compensation Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Employment ID",
			"name": "employmentId",
			"required": true,
			"description": "The unique identifier of the employment",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Create Employment"
					],
					"operation": [
						"Post Transition Compensation Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "A valid Bearer token for authorizing the request.",
			"default": "Bearer <TOKEN>",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Create Employment"
					],
					"operation": [
						"Post Transition Compensation Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "The accept header is used to influence what type of output is returned and in most cases the version of the output",
			"default": "application/json;version=2018-01-01",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Create Employment"
					],
					"operation": [
						"Post Transition Compensation Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/{employeeId}/employments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Create Employment"
					],
					"operation": [
						"Post Employment By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Employee ID",
			"name": "employeeId",
			"required": true,
			"description": "The unique identifier of the employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Create Employment"
					],
					"operation": [
						"Post Employment By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "A valid Bearer token for authorizing the request.",
			"default": "Bearer <TOKEN>",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Create Employment"
					],
					"operation": [
						"Post Employment By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "The accept header is used to influence what type of output is returned and in most cases the version of the output",
			"default": "application/json;version=2018-01-01",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Create Employment"
					],
					"operation": [
						"Post Employment By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Employee Data",
			"name": "employeeData",
			"type": "json",
			"default": "{\n  \"iban\": \"NL52ABNA0424968264\"\n}",
			"routing": {
				"send": {
					"property": "employeeData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Create Employment"
					],
					"operation": [
						"Post Employment By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Employment Data",
			"name": "employmentData",
			"type": "json",
			"default": "{\n  \"calculateWorkingHours\": true,\n  \"cancellationNoticeDate\": \"2019-05-31\",\n  \"cancellationPeriodEmployee\": 1,\n  \"cancellationPeriodEmployer\": 1,\n  \"cancellationPeriodTimeUnit\": {\n    \"key\": 4,\n    \"value\": \"Maand(en)\"\n  },\n  \"commissionUntilDate\": \"2019-01-01\",\n  \"deviatingCLATaxReturn\": 2,\n  \"emailLeaveRequest\": \"api@loket.nl\",\n  \"employeeProfileId\": {\n    \"key\": 1,\n    \"value\": \"Profiel full-timers\"\n  },\n  \"employmentContractType\": {\n    \"key\": 1,\n    \"value\": \"Labor agreement\"\n  },\n  \"employmentDurationType\": {\n    \"key\": 1,\n    \"value\": \"Contract of indefinite duration\"\n  },\n  \"essMutationSet\": {\n    \"key\": 1,\n    \"value\": \"Standaard\"\n  },\n  \"exemptionInsuranceObligation\": {\n    \"key\": 0,\n    \"value\": \"Geen uitzondering.\"\n  },\n  \"firstDayNotification\": false,\n  \"hasOnCallAppearanceObligation\": true,\n  \"historicalStartDate\": \"2012-05-01\",\n  \"incomeRelationshipNumber\": 12,\n  \"isAnonymousEmployee\": true,\n  \"isDirectorAndMajorShareholder\": false,\n  \"isFamilyOfOwner\": false,\n  \"isGemoedsbezwaardEmployeeInsurance\": true,\n  \"isGemoedsbezwaardNationalInsurance\": true,\n  \"isOnCallEmployment\": true,\n  \"isPreviousOwner\": false,\n  \"namePayslip\": \"Steve Jobs\",\n  \"nonPayrollAdministration\": {\n    \"description\": \"Bakker\",\n    \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n    \"name\": \"ABC accountants\"\n  },\n  \"participation55plusRegulationUWV\": false,\n  \"payrollAdministration\": {\n    \"clientNumber\": 1234,\n    \"description\": \"Bakker\",\n    \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n    \"name\": \"ABC accountants\"\n  },\n  \"periodPayGradeAdjustment\": 2,\n  \"professionCode\": 4,\n  \"sendMdvNotification\": true,\n  \"signalPayGradeAdjustment\": false,\n  \"specialIncomeRatio\": {\n    \"key\": 0,\n    \"value\": \"n.v.t.\"\n  },\n  \"startCancellationNoticePeriod\": \"2019-06-01\",\n  \"startDate\": \"2019-01-01\",\n  \"startDateContractOfIndefiniteDuration\": \"2018-05-08\",\n  \"typeOfEmployee\": {\n    \"key\": 1,\n    \"value\": \"Werknemer\"\n  },\n  \"typeOfParticipation\": {\n    \"key\": 0,\n    \"value\": \"n.vt.\"\n  },\n  \"vacationCoupons\": {\n    \"key\": 1,\n    \"value\": \"n.v.t.\"\n  },\n  \"valueOfParticipation\": {\n    \"key\": 0,\n    \"value\": \"n.v.t.\"\n  },\n  \"writtenEmploymentContract\": true\n}",
			"routing": {
				"send": {
					"property": "employmentData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Create Employment"
					],
					"operation": [
						"Post Employment By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Fiscal Data",
			"name": "fiscalData",
			"type": "json",
			"default": "{\n  \"annualSalary\": 60000,\n  \"applyDayTables\": false,\n  \"applyDeviatingPayrollTaxPercentageOn\": {\n    \"key\": 2,\n    \"value\": \"Afwijkend voor tabel- en tariefloon\"\n  },\n  \"applyPayrollTaxDeduction\": false,\n  \"applyStudentDeduction\": false,\n  \"deviatingCalculationRulePayrollTax\": {\n    \"key\": 2,\n    \"value\": \"Werknemer belastingpl. en niet premiepl. WLZ\"\n  },\n  \"deviatingPayrollTaxPercentage\": 27.45,\n  \"deviatingPayrollTaxTableColour\": {\n    \"key\": 2,\n    \"value\": \"Werknemer belastingpl. en niet premiepl. WLZ\"\n  },\n  \"residentOf\": {\n    \"key\": 2,\n    \"value\": \"Andere EU-lidstaat,EER-land,Zwitserland of BES-eilanden\"\n  }\n}",
			"routing": {
				"send": {
					"property": "fiscalData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Create Employment"
					],
					"operation": [
						"Post Employment By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Organizational Entity Data",
			"name": "organizationalEntityData",
			"type": "json",
			"default": "{\n  \"department\": {\n    \"code\": 2,\n    \"description\": \"Verkoop\",\n    \"key\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n  },\n  \"deviatingFunctionDescription\": \"Directeur\",\n  \"deviatingFunctionGroup\": \"9A\",\n  \"distributionUnit\": {\n    \"code\": 2,\n    \"description\": \"Sales\",\n    \"key\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n  },\n  \"function\": {\n    \"description\": \"Directeur\",\n    \"group\": \"internal\",\n    \"key\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n  },\n  \"internalTelephoneExtensionNumber\": \"0133031600\",\n  \"placeOfEmployment\": \"Amsterdam office\",\n  \"standardFunction\": {\n    \"category\": 1,\n    \"code\": \"A21\",\n    \"key\": 1,\n    \"value\": \"Administrateur\"\n  }\n}",
			"routing": {
				"send": {
					"property": "organizationalEntityData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Create Employment"
					],
					"operation": [
						"Post Employment By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Other Payroll Variables Data",
			"name": "otherPayrollVariablesData",
			"type": "json",
			"default": "{\n  \"deviatingPremiumGroup\": {\n    \"key\": 2,\n    \"value\": \"(12) Metaal- en technische bedrijfstakken\"\n  }\n}",
			"routing": {
				"send": {
					"property": "otherPayrollVariablesData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Create Employment"
					],
					"operation": [
						"Post Employment By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Social Security Data",
			"name": "socialSecurityData",
			"type": "json",
			"default": "{\n  \"healthCareInsuranceActType\": {\n    \"key\": 2,\n    \"value\": \"(C/K) Wel verzekeringsplichtig, normaal tarief\"\n  },\n  \"isInsuredForOccupationalDisabilityInsuranceAct\": false,\n  \"isInsuredForSicknessBenefitsAct\": false,\n  \"isInsuredForUnemploymentInsuranceAct\": false\n}",
			"routing": {
				"send": {
					"property": "socialSecurityData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Create Employment"
					],
					"operation": [
						"Post Employment By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Wage Data",
			"name": "wageData",
			"type": "json",
			"default": "{\n  \"applyPayGrade\": true,\n  \"grossWage\": 23,\n  \"grossWageType\": {\n    \"key\": 2,\n    \"value\": \"hourly\"\n  },\n  \"netWageType\": {\n    \"key\": 1,\n    \"value\": \"hourly\"\n  },\n  \"payGrade\": {\n    \"key\": 1,\n    \"value\": \"Schaal B1, 15 jaar\"\n  },\n  \"payScale\": {\n    \"key\": 1,\n    \"value\": \"Glastuinbouw maand, Loongebouw A\"\n  }\n}",
			"routing": {
				"send": {
					"property": "wageData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Create Employment"
					],
					"operation": [
						"Post Employment By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Working Hours Data",
			"name": "workingHoursData",
			"type": "json",
			"default": "{\n  \"averageParttimeFactor\": 37.5,\n  \"calculateUsingWorkPattern\": {\n    \"daysDailyRate\": false,\n    \"deviatingDaysAndHours\": false,\n    \"hoursBrokenPeriod\": false,\n    \"hoursPeriod\": false,\n    \"leaveHours\": true\n  },\n  \"contractCode\": {\n    \"code\": 1022,\n    \"description\": \"SLA-PT-met toeslagen ATW (88)\",\n    \"key\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n  },\n  \"deviatingHoursPerWeek\": 32,\n  \"deviatingSvDaysPerPeriod\": 32,\n  \"flexibleHoursContract\": {\n    \"key\": 0,\n    \"value\": \"n.v.t.\"\n  },\n  \"regularWorkPattern\": true,\n  \"shift\": {\n    \"bonusPercentage\": 12,\n    \"fullTimeHoursPerWeek\": 40,\n    \"shiftNumber\": 1\n  },\n  \"workPattern\": {\n    \"evenWeeks\": {\n      \"friday\": 2,\n      \"monday\": 0,\n      \"saturday\": 0,\n      \"sunday\": 0,\n      \"thursday\": 8,\n      \"tuesday\": 8,\n      \"wednesday\": 8\n    },\n    \"oddWeeks\": {\n      \"friday\": 4,\n      \"monday\": 8,\n      \"saturday\": 0,\n      \"sunday\": 0,\n      \"thursday\": 7.5,\n      \"tuesday\": 8,\n      \"wednesday\": 4\n    }\n  }\n}",
			"routing": {
				"send": {
					"property": "workingHoursData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Create Employment"
					],
					"operation": [
						"Post Employment By Employee ID"
					]
				}
			}
		},
];
