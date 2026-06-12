import type { INodeProperties } from 'n8n-workflow';

export const employmentDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					]
				}
			},
			"options": [
				{
					"name": "Get Employment By Employment ID",
					"value": "Get Employment By Employment ID",
					"action": "Details of an employment",
					"description": "__Activity name :__ GetEmploymentByEmploymentId\n\nGet the details for an employment\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}"
						}
					}
				},
				{
					"name": "Patch Type Of Employment Category Type Fields By Employment ID",
					"value": "Patch Type Of Employment Category Type Fields By Employment ID",
					"action": "Edit the type of an employment",
					"description": "__Activity name :__ PatchTypeOfEmploymentCategoryTypeFieldsByEmploymentId\n\nEdit a small subset of fields of an employment. \n\nPossible values for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the URL\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}"
						}
					}
				},
				{
					"name": "Put Employment By Employment ID",
					"value": "Put Employment By Employment ID",
					"action": "Edit the details of an employment",
					"description": "__Activity name :__ PutEmploymentByEmploymentId\n\nEdit the details of an employment\n\nPossible values for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the URL\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}"
						}
					}
				},
				{
					"name": "Patch Correct Start Date By Employment ID",
					"value": "Patch Correct Start Date By Employment ID",
					"action": "Correct the start (employment) date for an employment.",
					"description": "__Activity name :__ PatchCorrectStartDateByEmploymentId\n\nEdit the starting date (i.e. the official first day of a contract) of an employment. Please note that changing the starting data for an employment affects multiple entities in Loket (e.g. wage-records etc). \n\n\n * With a correction of the starting date, you are responsible for the associated notifications. \n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/correctstartdate"
						}
					}
				},
				{
					"name": "Patch Reinstate By Employment ID",
					"value": "Patch Reinstate By Employment ID",
					"action": "Undo termination for an employment.",
					"description": "__Activity name :__  PatchReinstateByEmploymentId\n\nreinstate for an employment. <br/> Effectively,  termination is reversed by using this endpoint and therefore the employment will be considered active again. \n\nMaak een uitdienst melding ongedaan.<br/> Effectief gezien, 'datum uit dienst' gegevens worden teruggedraaid waardoor het dienstverband weer als actief zal worden beschouwd in Loket <br/>\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/reinstate"
						}
					}
				},
				{
					"name": "Patch Terminate By Employment ID",
					"value": "Patch Terminate By Employment ID",
					"action": "Terminate an employment.",
					"description": "__Activity name :__  PatchTerminateByEmploymentId\n\nTerminate an employment. Effectively, the `endDate` of the employment will be set to the given date.<br/> Please note that setting the `endDate` for an employment affects multiple resources in Loket (e.g. wage, workingHours and absence). Note that the termination date is to be filled with the last day of employment.<br/>\n\nIf the termination needs to be reversed use the `../employments/{employmentId}/reinstate` endpoint. <br/> If the termination needs to be changed, use this endpoint to revise the termination data<br/>\n\nThe metadata for endOfEmploymentReason and endOfEmploymentReasonTaxAuthorities are included in the 'regular' metadata-endpoint of the Employment resource. \n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/terminate"
						}
					}
				},
				{
					"name": "Get Employments By Employee ID",
					"value": "Get Employments By Employee ID",
					"action": "List of employments for an employee",
					"description": "__Activity name :__ GetEmploymentsByEmployeeId\n\nGet the list of employments for an employee\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/employments"
						}
					}
				},
				{
					"name": "Get Employments By Employer ID",
					"value": "Get Employments By Employer ID",
					"action": "List of employments for an employer",
					"description": "__Activity name :__ GetEmploymentsByEmployerId\n\nGet a list of employments for an employer\n\nThis endpoint only returns the employments that meet the filter settings set at the user level. Note that filter settings are set for a user <-> employer <-> client combination.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/employees/employments"
						}
					}
				},
				{
					"name": "Get Employments Comprehensive By Employer ID",
					"value": "Get Employments Comprehensive By Employer ID",
					"action": "List of employments with additional entities",
					"description": "__Activity name :__ GetEmploymentsComprehensiveByEmployerId\n\nGet a list of employments for an employer.  With this version we introduced the \"Comprehensive\" resource which contains additional entities. \n\nThis endpoint only returns the employments that meet the filter settings set at the user level. Note that filter settings are set for a user <-> employer <-> client combination.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/employees/employments/comprehensive"
						}
					}
				},
				{
					"name": "Get Employments Minimized By Employer ID",
					"value": "Get Employments Minimized By Employer ID",
					"action": "List of employments with fewer fields for performance reasons",
					"description": "__Activity name :__ GetEmploymentsMinimizedByEmployerId\n\nGet a list of employments for an employer.  With this version we introduced the \"Minimized\" resource which contains fewer fields.  This version should increase performance when requesting employments for large employer.\n\nThis endpoint only returns the employments that meet the filter settings set at the user level. Note that filter settings are set for a user <-> employer <-> client combination.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/employees/employments/minimized"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Get Employment By Employment ID"
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
						"Employment"
					],
					"operation": [
						"Get Employment By Employment ID"
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
						"Employment"
					],
					"operation": [
						"Get Employment By Employment ID"
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
						"Employment"
					],
					"operation": [
						"Get Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /providers/employers/employees/employments/{employmentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Patch Type Of Employment Category Type Fields By Employment ID"
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
						"Employment"
					],
					"operation": [
						"Patch Type Of Employment Category Type Fields By Employment ID"
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
						"Employment"
					],
					"operation": [
						"Patch Type Of Employment Category Type Fields By Employment ID"
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
						"Employment"
					],
					"operation": [
						"Patch Type Of Employment Category Type Fields By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "Input the value acquired in the ETag header for concurrency control. Please note this is optional (and not recommended for most types of integrations).",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Patch Type Of Employment Category Type Fields By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Employment Category Type",
			"name": "employmentCategoryType",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Ouderschapsverlof\"\n}",
			"description": "A selection of special pre defined employment-types for the employment.  NL: Type dienstverband",
			"routing": {
				"send": {
					"property": "employmentCategoryType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Patch Type Of Employment Category Type Fields By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Linked Employment",
			"name": "linkedEmployment",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of an object (GUID/UUID)",
			"routing": {
				"send": {
					"property": "linkedEmployment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Patch Type Of Employment Category Type Fields By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/{employmentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
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
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
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
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
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
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "Input the value acquired in the ETag header for concurrency control. Please note this is optional (and not recommended for most types of integrations).",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Calculate Working Hours",
			"name": "calculateWorkingHours",
			"type": "boolean",
			"default": true,
			"description": "Automatically calculate working hours for the employment if the option automatically calculate hours is selected for a given period. NL: Completeren/Berekenen uren\n",
			"routing": {
				"send": {
					"property": "calculateWorkingHours",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Cancellation Notice Date",
			"name": "cancellationNoticeDate",
			"type": "string",
			"default": "2018-05-31",
			"description": "The date on which the notice was given by either the employee or the employer. NL: DatumOpzegging",
			"routing": {
				"send": {
					"property": "cancellationNoticeDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Cancellation Period Employee",
			"name": "cancellationPeriodEmployee",
			"type": "number",
			"default": 1,
			"description": "The notice period an employee is required to give the employer when resigning. The unit of time that applies to this field is described in the noticePeriodTimeUnit property. NL: OpzegtermijnWerknemer",
			"routing": {
				"send": {
					"property": "cancellationPeriodEmployee",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Cancellation Period Employer",
			"name": "cancellationPeriodEmployer",
			"type": "number",
			"default": 1,
			"description": "The notice period an employer is required to give the employee when terminating the contract. The unit of time that applies to this field is described in the noticePeriodTimeUnit property. NL: OpzegtermijnWerkgever",
			"routing": {
				"send": {
					"property": "cancellationPeriodEmployer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Cancellation Period Time Unit",
			"name": "cancellationPeriodTimeUnit",
			"type": "json",
			"default": "{\n  \"key\": 4,\n  \"value\": \"Maand(en)\"\n}",
			"description": "The unit of time used for the noticePeriodeEmployee and noticePeriodEmployer properties. NL: PeriodeOpzegTermijn",
			"routing": {
				"send": {
					"property": "cancellationPeriodTimeUnit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Commission Until Date",
			"name": "commissionUntilDate",
			"type": "string",
			"default": "2019-01-01",
			"description": "The date on which the employment will end. NL: AanstellingTot",
			"routing": {
				"send": {
					"property": "commissionUntilDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Commission Until Date 1",
			"name": "commissionUntilDate1",
			"type": "string",
			"default": "2018-05-31",
			"description": "Until date for commision #1. NL: AanstellingTot1",
			"routing": {
				"send": {
					"property": "commissionUntilDate1",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Commission Until Date 2",
			"name": "commissionUntilDate2",
			"type": "string",
			"default": "2018-05-31",
			"description": "Until date for commision #2. NL: AanstellingTot2",
			"routing": {
				"send": {
					"property": "commissionUntilDate2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Commission Until Date 3",
			"name": "commissionUntilDate3",
			"type": "string",
			"default": "2018-05-31",
			"description": "Until date for commision #3. NL: AanstellingTot3",
			"routing": {
				"send": {
					"property": "commissionUntilDate3",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Commission Until Date 4",
			"name": "commissionUntilDate4",
			"type": "string",
			"default": "2018-05-31",
			"description": "Until date for commision #4. NL: AanstellingTot4",
			"routing": {
				"send": {
					"property": "commissionUntilDate4",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Commission Until Date 5",
			"name": "commissionUntilDate5",
			"type": "string",
			"default": "2018-05-31",
			"description": "Until date for commision #5. NL: AanstellingTot5",
			"routing": {
				"send": {
					"property": "commissionUntilDate5",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Commission Until Date 6",
			"name": "commissionUntilDate6",
			"type": "string",
			"default": "2018-05-31",
			"description": "Until date for commision #6. NL: AanstellingTot6",
			"routing": {
				"send": {
					"property": "commissionUntilDate6",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating CLA External Party",
			"name": "deviatingCLAExternalParty",
			"type": "number",
			"default": 2,
			"description": "CLA (CAO) code in case of a deviating CLA for external parties . NL: CaoKlantgroepAfwijkend",
			"routing": {
				"send": {
					"property": "deviatingCLAExternalParty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating CLA Tax Return",
			"name": "deviatingCLATaxReturn",
			"type": "number",
			"default": 2,
			"description": "CLA (CAO) code in case of a deviating CLA for tax returns. NL: CAOUWV",
			"routing": {
				"send": {
					"property": "deviatingCLATaxReturn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Email Leave Request",
			"name": "emailLeaveRequest",
			"type": "string",
			"default": "api@loket.nl",
			"description": "Recipient e-mail adress for notification in case of leave requests. NL: EmailVerlofaanvraag",
			"routing": {
				"send": {
					"property": "emailLeaveRequest",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Employee Profile ID",
			"name": "employeeProfileId",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Profiel full-timers\"\n}",
			"description": "References to an employeeprofile that is specified in the payroll administration level. NL: WerknemerProfielID\n\n`employeeProfileId` is a metadata field within the payroll administration context. Possible values can be managed by the user.",
			"routing": {
				"send": {
					"property": "employeeProfileId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Employment Category Type",
			"name": "employmentCategoryType",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Ouderschapsverlof\"\n}",
			"description": "A selection of special pre defined employment-types for the employment.  NL: Type dienstverband",
			"routing": {
				"send": {
					"property": "employmentCategoryType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Employment Contract Type",
			"name": "employmentContractType",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Arbeidsovereenkomst (excl BBL)\"\n}",
			"description": "The type of employment applicable for the employment. NL: BasisDienstverband",
			"routing": {
				"send": {
					"property": "employmentContractType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Employment Duration Type",
			"name": "employmentDurationType",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Contract of indefinite duration\"\n}",
			"description": "A selection of pre defined durations for the employment. NL: SoortDienstverband",
			"routing": {
				"send": {
					"property": "employmentDurationType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "2018-10-23",
			"description": "The date on which the employment ends. NL: DatumUitDienst",
			"routing": {
				"send": {
					"property": "endDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "End Of Employment Due To Illness",
			"name": "endOfEmploymentDueToIllness",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether the reason for the termination of an employment is due to long-term illness. NL: ZiekUitDienst",
			"routing": {
				"send": {
					"property": "endOfEmploymentDueToIllness",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "End Of Employment Reason",
			"name": "endOfEmploymentReason",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"VUT\"\n}",
			"description": "The reason for the end of the employment. NL: RedenEindeDienstverband\n\n__Note:__ as of 2020-01-01 `endOfEmploymentReasonTaxAuthorities` replaces this field as the main reason for the end of the employment. We say 'main reason' as in certain cases this field still has a purpose. \nPlease set this field to 8 (Others) unless one of the following integrations is used for this employment\n  * UPA-pensioenaangifte\n  * Cordares\n  * APG-pensioenaangifte\n  * Achmea",
			"routing": {
				"send": {
					"property": "endOfEmploymentReason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "End Of Employment Reason Tax Authorities",
			"name": "endOfEmploymentReasonTaxAuthorities",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Beëindiging arbeidsovereenkomst met wederzijds goedvinden op initiatief van de werkgever.\"\n}",
			"description": "The reason for the end of the employment as specified by the Dutch Tax authorties. NL: RedenEindeDienstverbandAangifte\n\n__Note:__ This field replaces `endOfEmploymentReason` as of 2020-01-01. `endOfEmploymentReason` will remain as a field in the resource as several integration require this field still.",
			"routing": {
				"send": {
					"property": "endOfEmploymentReasonTaxAuthorities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Ess Mutation Set",
			"name": "essMutationSet",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Standaard\"\n}",
			"description": "References to a specified set of payrollcomponents that are to accessible via ESS for employee mutations. Standard-set means the standard set defined for the administration will be applied for this employment. NULL means no set will be defined for this employment (so no access to any components). NL : ExportsetID\n\n`essMutationSet` is a metadata field within the werkgever/provider context. Possible values can be managed by the user.",
			"routing": {
				"send": {
					"property": "essMutationSet",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Exemption Insurance Obligation",
			"name": "exemptionInsuranceObligation",
			"type": "json",
			"default": "{\n  \"key\": 0,\n  \"value\": \"Geen uitzondering.\"\n}",
			"description": "Indicates whether an exemption applies for the insurance obligation. If NULL than there is no exemption, thus insurance obligation applies in that case (verzekingsplicht). NL: CodeUitzondering",
			"routing": {
				"send": {
					"property": "exemptionInsuranceObligation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Exemption Premium Waiver Marginal Labour",
			"name": "exemptionPremiumWaiverMarginalLabour",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether an exemption (i.e. waiver) on the premium marginal labour (vrijstelling marginale arbeid) applies for this employment. NL: PremieVrijstellingMarginaleArbeid",
			"routing": {
				"send": {
					"property": "exemptionPremiumWaiverMarginalLabour",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Exemption Work Related Expense Scheme",
			"name": "exemptionWorkRelatedExpenseScheme",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether an exemption (i.e. non-participation) on the work-related expense scheme (werkkostenregeling) applies for this employment. NL: WerkkostenRegelingUitsluiting",
			"routing": {
				"send": {
					"property": "exemptionWorkRelatedExpenseScheme",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "First Day Notification",
			"name": "firstDayNotification",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether a first-day notification (EersteDagsMelding) was created for the employment. Attention: this indication cannot be altered after an employment has been created. NL: EersteDagsMelding ",
			"routing": {
				"send": {
					"property": "firstDayNotification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Has On Call Appearance Obligation",
			"name": "hasOnCallAppearanceObligation",
			"type": "boolean",
			"default": true,
			"description": "In the case of an on-call employment this field indicates whether the employment has an appearance obligation. This field can be `null` in cases where it is unknown whether the employment has an appearance obligation. NL: SoortOproepkrachtOfInvalkracht\n",
			"routing": {
				"send": {
					"property": "hasOnCallAppearanceObligation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Historical Start Date",
			"name": "historicalStartDate",
			"type": "string",
			"default": "2012-05-01",
			"description": "The historical date on which the employee was first employed. This field is used when an employee has multiple employments in time. In most cases this field should be used as the date on which the employee started working for the company. NL: HistorischeDatumInDienst",
			"routing": {
				"send": {
					"property": "historicalStartDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of an object (GUID/UUID)",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Income Relationship Number",
			"name": "incomeRelationshipNumber",
			"type": "number",
			"default": 12,
			"description": "The income relationship number that is required in the tax return. Together with the citizen service number (burgerservicenummer, BSN) and wage tax number, the income relationship number uniquely identifies an employment. NL: NummerInkomstenVerhouding",
			"routing": {
				"send": {
					"property": "incomeRelationshipNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Is Anonymous Employee",
			"name": "isAnonymousEmployee",
			"type": "boolean",
			"default": true,
			"description": "An employee that wants to remain anonymous related to social security instances. NL: IsAnoniemeWerknemer\n",
			"routing": {
				"send": {
					"property": "isAnonymousEmployee",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Is Director And Major Shareholder",
			"name": "isDirectorAndMajorShareholder",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether the employment can be classified as a director and major shareholder (Dutch: directeur-grootaandeelhouder or DGA). This field can be `null` in cases where it is unknown whether the employment can be classified as a director and major shareholder. NL: IsDirecteurGrootAandeelhouder",
			"routing": {
				"send": {
					"property": "isDirectorAndMajorShareholder",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Is Family Of Owner",
			"name": "isFamilyOfOwner",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether the employment can be classified as a previous owner. This field can be `null` in cases where it is unknown whether the employment can be classified as a director and major shareholder. NL: IsFamilieVanEigenaar",
			"routing": {
				"send": {
					"property": "isFamilyOfOwner",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Is Gemoedsbezwaard Employee Insurance",
			"name": "isGemoedsbezwaardEmployeeInsurance",
			"type": "boolean",
			"default": true,
			"description": "Gemoedsbezwaard Werknemerverzekering. NL: IsGemoedsbezwaardWerknemerverzekering\n",
			"routing": {
				"send": {
					"property": "isGemoedsbezwaardEmployeeInsurance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Is Gemoedsbezwaard National Insurance",
			"name": "isGemoedsbezwaardNationalInsurance",
			"type": "boolean",
			"default": true,
			"description": "Gemoedsbezwaard Volksverzekering. NL: IsGemoedsbezwaardVolksverzekering\n",
			"routing": {
				"send": {
					"property": "isGemoedsbezwaardNationalInsurance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Is On Call Employment",
			"name": "isOnCallEmployment",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether the employment is an on-call employment. This field can be `null` in cases where it is unknown whether the employment is an on-call employment. NL: IsOproepkrachtOfInvalkracht\n",
			"routing": {
				"send": {
					"property": "isOnCallEmployment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Is Previous Owner",
			"name": "isPreviousOwner",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether the employment can be classified as a previous owner. This field can be `null` in cases where it is unknown whether the employment can be classified as a director and major shareholder. NL: IsVorigeEigenaar",
			"routing": {
				"send": {
					"property": "isPreviousOwner",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Linked Employment",
			"name": "linkedEmployment",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of an object (GUID/UUID)",
			"routing": {
				"send": {
					"property": "linkedEmployment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Name Payslip",
			"name": "namePayslip",
			"type": "string",
			"default": "Steve Jobs",
			"description": "Name that is visible on payslips for the employment. NL: NaamLoonstrook",
			"routing": {
				"send": {
					"property": "namePayslip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Non Payroll Administration",
			"name": "nonPayrollAdministration",
			"type": "json",
			"default": "{\n  \"description\": \"Bakker\",\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n  \"name\": \"HR only employees\"\n}",
			"description": "Id of the non-payroll administration. This field cannot simultaneously have a value with payrollAdministration (only one can have a value at a time)\n\n`nonPayrollAdministration` is a metadata field within the employer context. Possible values can be managed by the user.",
			"routing": {
				"send": {
					"property": "nonPayrollAdministration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Participation 55 Plus Regulation UWV",
			"name": "participation55plusRegulationUWV",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether the 55 plus regulation (55 plus regeling) is applicable for the employment. NL: Deelname55Plus",
			"routing": {
				"send": {
					"property": "participation55plusRegulationUWV",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Administration",
			"name": "payrollAdministration",
			"type": "json",
			"default": "{\n  \"clientNumber\": 1234,\n  \"description\": \"Bakker\",\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n  \"name\": \"ABC accountants\"\n}",
			"description": "Id of the payroll administration. This field cannot simultaneously have a value with nonPayrollAdministration (only one can have a value at a time)\n\n`payrollAdministration` is a metadata field within the employer context. Possible values can be managed by the user.",
			"routing": {
				"send": {
					"property": "payrollAdministration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll ID",
			"name": "payrollId",
			"type": "number",
			"default": 2,
			"description": "The payrolling number for this employment of the employee. Used by the payroll engine. This number is automatically generated and cannot be changed by the user. NL: PersoneelsnummerVerloning",
			"routing": {
				"send": {
					"property": "payrollId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Period Pay Grade Adjustment",
			"name": "periodPayGradeAdjustment",
			"type": "number",
			"default": 2,
			"description": "The values is used for two processes. First off, a message can be configured to notify the user(s) of a upcoming wage raise/negotiation based on the value of this field. Second, the value, in combination with `signalSalaryScaleAdjustment`, is used to signal a wage raises based on the `payScale` and ‘payGrade’. NL: PeriodeSalarisPeriodiek",
			"routing": {
				"send": {
					"property": "periodPayGradeAdjustment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Profession Code",
			"name": "professionCode",
			"type": "number",
			"default": 4,
			"description": "A code field for a profession. This field only applies in case of a specific CLA (Bouw / Infra). Please leave empty if not applicable. NL: BeroepUWV",
			"routing": {
				"send": {
					"property": "professionCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Send To External Party",
			"name": "sendToExternalParty",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"n.v.t.\"\n}",
			"description": "Indicates whether payroll information of this employment is sent to external pension funds. Attention: this indication ONLY applies regarding the information to pension funds. If NULL then setting according to regulation is leading. NL: AanleveringExternePartij",
			"routing": {
				"send": {
					"property": "sendToExternalParty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Signal Pay Grade Adjustment",
			"name": "signalPayGradeAdjustment",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether signaling regarding salary scale adjustments are enabled for the employment. NL: SalarisschaalSignaleren",
			"routing": {
				"send": {
					"property": "signalPayGradeAdjustment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Special Income Ratio",
			"name": "specialIncomeRatio",
			"type": "json",
			"default": "{\n  \"key\": 0,\n  \"value\": \"n.v.t.\"\n}",
			"description": "Indicates the special income ratio. NL: SpecialeInkomstenVerhouding",
			"routing": {
				"send": {
					"property": "specialIncomeRatio",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Start Cancellation Notice Period",
			"name": "startCancellationNoticePeriod",
			"type": "string",
			"default": "2018-06-01",
			"description": "The date on which the  term of notice period starts. If the agrement states that a notice periode always starts on the first day of the month and the notice was given on the 15th the start notice periode will be the first day of the next month. NL: AanvangOpzegtermijn",
			"routing": {
				"send": {
					"property": "startCancellationNoticePeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The date on which this employment starts. NL: DatumInDienst",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date Contract Of Indefinite Duration",
			"name": "startDateContractOfIndefiniteDuration",
			"type": "string",
			"default": "2018-05-08",
			"description": "When did the value of `employmentDurationType` change for definite to indefinite. NL: Startdatum onbepaalde tijd This value should be te samen as the `startDate` if the contract was indefinite from the start.",
			"routing": {
				"send": {
					"property": "startDateContractOfIndefiniteDuration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Temporary Tax Exemption",
			"name": "temporaryTaxExemption",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Nee.\"\n}",
			"description": "Indicates whether there a temporary tax exemption is to be applied for the employment. NL: TijdelijkeHeffingskorting",
			"routing": {
				"send": {
					"property": "temporaryTaxExemption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Type Of Employee",
			"name": "typeOfEmployee",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Werknemer\"\n}",
			"description": "A selection of pre defined employee-types for the employment. NL: SoortWerknemer",
			"routing": {
				"send": {
					"property": "typeOfEmployee",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Type Of Participation",
			"name": "typeOfParticipation",
			"type": "json",
			"default": "{\n  \"key\": 0,\n  \"value\": \"n.vt.\"\n}",
			"description": "The type of participation (aard van deelnemerschap) is only applicable in case the person related to this employment is eligible for pension (product required). NL: AardDeelnemerschap",
			"routing": {
				"send": {
					"property": "typeOfParticipation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Vacation Coupons",
			"name": "vacationCoupons",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"n.v.t.\"\n}",
			"description": "Indication for vacation coupons (vakantiebonnen). This is only applies to a limited set of CLA`s. NL: Vakantiebonnen",
			"routing": {
				"send": {
					"property": "vacationCoupons",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Value Of Participation",
			"name": "valueOfParticipation",
			"type": "json",
			"default": "{\n  \"key\": 0,\n  \"value\": \"n.v.t.\"\n}",
			"description": "The value of participation (waarde van deelnemerschap) is only applicable in case the person related to this employment is eligible for pension (product required). NL: WaardeDeelnemerschap",
			"routing": {
				"send": {
					"property": "valueOfParticipation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Wachtgeld Old Regulation",
			"name": "wachtgeldOldRegulation",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether the (old) wachtgeld regulation is applicable for the employment. NL: WachtgeldOudeRegeling",
			"routing": {
				"send": {
					"property": "wachtgeldOldRegulation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Written Employment Contract",
			"name": "writtenEmploymentContract",
			"type": "boolean",
			"default": true,
			"description": "Did the employment and employer make a written contract? NL: Schriftelijke overeenkomst",
			"routing": {
				"send": {
					"property": "writtenEmploymentContract",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Put Employment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /providers/employers/employees/employments/{employmentId}/correctstartdate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Patch Correct Start Date By Employment ID"
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
						"Employment"
					],
					"operation": [
						"Patch Correct Start Date By Employment ID"
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
						"Employment"
					],
					"operation": [
						"Patch Correct Start Date By Employment ID"
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
						"Employment"
					],
					"operation": [
						"Patch Correct Start Date By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The date on which this employment starts (=first day of the employment).\n",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Patch Correct Start Date By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /providers/employers/employees/employments/{employmentId}/reinstate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Patch Reinstate By Employment ID"
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
						"Employment"
					],
					"operation": [
						"Patch Reinstate By Employment ID"
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
						"Employment"
					],
					"operation": [
						"Patch Reinstate By Employment ID"
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
						"Employment"
					],
					"operation": [
						"Patch Reinstate By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /providers/employers/employees/employments/{employmentId}/terminate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Patch Terminate By Employment ID"
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
						"Employment"
					],
					"operation": [
						"Patch Terminate By Employment ID"
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
						"Employment"
					],
					"operation": [
						"Patch Terminate By Employment ID"
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
						"Employment"
					],
					"operation": [
						"Patch Terminate By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Create Mdv Entry",
			"name": "createMdvEntry",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether an MDV-entry should automatically be generated (not sent) by Loket (Melding Dienstverband). This should typically only be used for Colland-related employments and if the module MDV is active for an employer, which means in most cases this indicator should be set to `false`.\n\nNext to that, a message is ONLY generated when the employment is actually terminated by performing this action (=the employment did not already have an endDate before calling this endpoint).\n",
			"routing": {
				"send": {
					"property": "createMdvEntry",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Patch Terminate By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "2018-10-23",
			"description": "The date on which the employment ends (=last day of the employment).\n",
			"routing": {
				"send": {
					"property": "endDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Patch Terminate By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "End Of Employment Due To Illness",
			"name": "endOfEmploymentDueToIllness",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether the reason for the termination of an employment is due to long-term illness. Mandatory if endDate is filled, else leave empty.\n",
			"routing": {
				"send": {
					"property": "endOfEmploymentDueToIllness",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Patch Terminate By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "End Of Employment Reason",
			"name": "endOfEmploymentReason",
			"type": "json",
			"default": "{\n  \"key\": 1\n}",
			"description": "The reason for the end of the employment. Mandatory if endDate is filled, else leave empty.\n",
			"routing": {
				"send": {
					"property": "endOfEmploymentReason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Patch Terminate By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/{employeeId}/employments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Get Employments By Employee ID"
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
						"Employment"
					],
					"operation": [
						"Get Employments By Employee ID"
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
						"Employment"
					],
					"operation": [
						"Get Employments By Employee ID"
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
						"Employment"
					],
					"operation": [
						"Get Employments By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"description": "Filter the collection",
			"default": "cancellationPeriodTimeUnit.key eq 4",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Get Employments By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"description": "Order the collection on one or more fields",
			"default": "-companyName,address.houseNumber",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "orderBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Get Employments By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Specifies which page should be returned",
			"default": 2,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Get Employments By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "Specifies the number of objects per page",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageSize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Get Employments By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/employees/employments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Get Employments By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Employer ID",
			"name": "employerId",
			"required": true,
			"description": "The unique identifier of the employer",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Get Employments By Employer ID"
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
						"Employment"
					],
					"operation": [
						"Get Employments By Employer ID"
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
						"Employment"
					],
					"operation": [
						"Get Employments By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"description": "Filter the collection",
			"default": "cancellationPeriodTimeUnit.key eq 4",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Get Employments By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"description": "Order the collection on one or more fields",
			"default": "-companyName,address.houseNumber",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "orderBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Get Employments By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Specifies which page should be returned",
			"default": 2,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Get Employments By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "Specifies the number of objects per page",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageSize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Get Employments By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/employees/employments/comprehensive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Get Employments Comprehensive By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Employer ID",
			"name": "employerId",
			"required": true,
			"description": "The unique identifier of the employer",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Get Employments Comprehensive By Employer ID"
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
						"Employment"
					],
					"operation": [
						"Get Employments Comprehensive By Employer ID"
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
						"Employment"
					],
					"operation": [
						"Get Employments Comprehensive By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Reference Date",
			"name": "referenceDate",
			"description": "Set a reference date for choosing the date dependent data.",
			"default": "2022-01-01",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "referenceDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Get Employments Comprehensive By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"description": "Filter the collection",
			"default": "cancellationPeriodTimeUnit.key eq 4",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Get Employments Comprehensive By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"description": "Order the collection on one or more fields",
			"default": "-companyName,address.houseNumber",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "orderBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Get Employments Comprehensive By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Specifies which page should be returned",
			"default": 2,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Get Employments Comprehensive By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "Specifies the number of objects per page",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageSize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Get Employments Comprehensive By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/employees/employments/minimized",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Get Employments Minimized By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Employer ID",
			"name": "employerId",
			"required": true,
			"description": "The unique identifier of the employer",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Get Employments Minimized By Employer ID"
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
						"Employment"
					],
					"operation": [
						"Get Employments Minimized By Employer ID"
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
						"Employment"
					],
					"operation": [
						"Get Employments Minimized By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"description": "Filter the collection",
			"default": "cancellationPeriodTimeUnit.key eq 4",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Get Employments Minimized By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"description": "Order the collection on one or more fields",
			"default": "-companyName,address.houseNumber",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "orderBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Get Employments Minimized By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Specifies which page should be returned",
			"default": 2,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Get Employments Minimized By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "Specifies the number of objects per page",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageSize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment"
					],
					"operation": [
						"Get Employments Minimized By Employer ID"
					]
				}
			}
		},
];
