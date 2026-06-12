import type { INodeProperties } from 'n8n-workflow';

export const absenceDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					]
				}
			},
			"options": [
				{
					"name": "Delete Absence By Absence ID",
					"value": "Delete Absence By Absence ID",
					"action": "Delete a specific absence record",
					"description": "__Activity name :__ DeleteAbsenceByAbsenceId\n\nDelete an existing absence (for an employee). If succesfull, this function also deletes the underlying absence progress records\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/absences/{{$parameter[\"absenceId\"]}}"
						}
					}
				},
				{
					"name": "Get Absence By Absence ID",
					"value": "Get Absence By Absence ID",
					"action": "Details of an Absence",
					"description": "__Activity name :__ GetAbsenceByAbsenceId\n\nGet the details of an Absence        \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/absences/{{$parameter[\"absenceId\"]}}"
						}
					}
				},
				{
					"name": "Put Absence By Absence",
					"value": "Put Absence By Absence",
					"action": "Edit the details of a Absence",
					"description": "__Activity name :__ PutAbsenceByAbsenceId\n\n__Metadata :__  Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the PUT URL.\n\nEdit the details of am Absence\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/absences/{{$parameter[\"absenceId\"]}}"
						}
					}
				},
				{
					"name": "Patch Close Absence By Absence ID",
					"value": "Patch Close Absence By Absence ID",
					"action": "Close an absence",
					"description": "__Activity name :__ PatchCloseAbsenceByAbsenceId\n\nA succesfull call to this endpoint will close the absence and the underlying absence progress (with an empty endDate). \n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/employees/absences/{{$parameter[\"absenceId\"]}}/closeabsence"
						}
					}
				},
				{
					"name": "Patch Reopen Absence By Absence ID",
					"value": "Patch Reopen Absence By Absence ID",
					"action": "Reopen an absence",
					"description": "__Activity name :__ PatchReopenAbsenceByAbsenceId\n\nWhen performing a succesfull call to this endpoint, then the absence and the underlying absence progress will we reopend.\nBoth `endOfAbsenceDate` and `endOfAbsenceReason` will be set to null\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/employees/absences/{{$parameter[\"absenceId\"]}}/reopenabsence"
						}
					}
				},
				{
					"name": "Get Absences By Employee ID",
					"value": "Get Absences By Employee ID",
					"action": "List of absences for an employee",
					"description": "__Activity name :__ GetAbsencesByEmployeeId\n\nGet a list of all absences for the given employee\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/absences"
						}
					}
				},
				{
					"name": "Post Absence By Employee ID",
					"value": "Post Absence By Employee ID",
					"action": "Create an Absence for an employee",
					"description": "__Activity name :__ PostAbsenceByEmployeeId\n\n__Metadata :__  Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults' to the POST URL. \n\nAdd an Absence (=verzuimmelding) for an employee. \n\n__Please note that if this endpoint is called succesfully both an absence (=verzuimmelding) AND one underlying absence progress (=verzuimverloop) will be created.__\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/absences"
						}
					}
				},
				{
					"name": "Get Absence Overview By Employee ID",
					"value": "Get Absence Overview By Employee ID",
					"action": "Download the absence overview for an employee",
					"description": "__Activity name :__ GetAbsenceOverviewByEmployeeId\n\nDownload the absence overview (verzuim) for a given time frame\n\n__Metadata :__ No metadata\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/absences/overview"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/absences/{absenceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Delete Absence By Absence ID"
					]
				}
			}
		},
		{
			"displayName": "Absence ID",
			"name": "absenceId",
			"required": true,
			"description": "The unique identifier of an absence",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Delete Absence By Absence ID"
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
						"Absence"
					],
					"operation": [
						"Delete Absence By Absence ID"
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
						"Absence"
					],
					"operation": [
						"Delete Absence By Absence ID"
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
						"Absence"
					],
					"operation": [
						"Delete Absence By Absence ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/absences/{absenceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Get Absence By Absence ID"
					]
				}
			}
		},
		{
			"displayName": "Absence ID",
			"name": "absenceId",
			"required": true,
			"description": "The unique identifier of an absence",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Get Absence By Absence ID"
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
						"Absence"
					],
					"operation": [
						"Get Absence By Absence ID"
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
						"Absence"
					],
					"operation": [
						"Get Absence By Absence ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/absences/{absenceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Put Absence By Absence"
					]
				}
			}
		},
		{
			"displayName": "Absence ID",
			"name": "absenceId",
			"required": true,
			"description": "The unique identifier of an absence",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Put Absence By Absence"
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
						"Absence"
					],
					"operation": [
						"Put Absence By Absence"
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
						"Absence"
					],
					"operation": [
						"Put Absence By Absence"
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
						"Absence"
					],
					"operation": [
						"Put Absence By Absence"
					]
				}
			}
		},
		{
			"displayName": "Accident Type",
			"name": "accidentType",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"work related accident\"\n}",
			"description": "The type of accident that led to the absence. This field will be NULL if the absence is not related to an accident.",
			"routing": {
				"send": {
					"property": "accidentType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Put Absence By Absence"
					]
				}
			}
		},
		{
			"displayName": "Action To Be Taken By Occupational Health And Safety Service",
			"name": "actionToBeTakenByOccupationalHealthAndSafetyService",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Spoedcontrole aan huis\"\n}",
			"description": "The desired action to be taken regarding the absence by the occupational health and safety service (arbodienst).\n",
			"routing": {
				"send": {
					"property": "actionToBeTakenByOccupationalHealthAndSafetyService",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Put Absence By Absence"
					]
				}
			}
		},
		{
			"displayName": "Case Manager",
			"name": "caseManager",
			"type": "json",
			"default": "{\n  \"function\": \"Ben Hur\",\n  \"name\": \"Ben Hur\",\n  \"organization\": \"Ben Hur\",\n  \"phoneNumber\": \"+31 13-1234567\"\n}",
			"routing": {
				"send": {
					"property": "caseManager",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Put Absence By Absence"
					]
				}
			}
		},
		{
			"displayName": "Cause Of Absence",
			"name": "causeOfAbsence",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"maternity leave\"\n}",
			"description": "The cause of the absence. This endpoint is intended for the registration of two types of absence:\n\n  1) Illness/sickness\n\n  2) \"Vangnet\" such as maternity leave, organ donation or adoption leave\n\n\nOther absences such as Vacation days, unpayed leave and Personal leave are registerd using the leave endpoint\n",
			"routing": {
				"send": {
					"property": "causeOfAbsence",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Put Absence By Absence"
					]
				}
			}
		},
		{
			"displayName": "Comments",
			"name": "comments",
			"type": "string",
			"default": "Lorem ipsum dolor sit amet, id nibh adhuc omnium vix, ne nec eius inani aliquip.",
			"description": "Free text field to register any relevant information.",
			"routing": {
				"send": {
					"property": "comments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Put Absence By Absence"
					]
				}
			}
		},
		{
			"displayName": "Contact Information",
			"name": "contactInformation",
			"type": "json",
			"default": "{\n  \"city\": \"Leiden\",\n  \"country\": {\n    \"isoCode\": \"NL\",\n    \"key\": 1,\n    \"value\": \"Netherlands\"\n  },\n  \"furtherIndication\": {\n    \"key\": 1,\n    \"value\": \"WW\"\n  },\n  \"houseNumber\": 12,\n  \"houseNumberAddition\": \"D\",\n  \"locationType\": {\n    \"key\": 1,\n    \"value\": \"Hospital\"\n  },\n  \"name\": \"RadboudUMC Nijmegen\",\n  \"phoneNumber\": \"+31 13-1234567\",\n  \"postalCode\": \"1234 AA\",\n  \"startDate\": \"2018-01-21\",\n  \"street\": \"Voordijk\"\n}",
			"routing": {
				"send": {
					"property": "contactInformation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Put Absence By Absence"
					]
				}
			}
		},
		{
			"displayName": "Expected Date Of Childbirth",
			"name": "expectedDateOfChildbirth",
			"type": "string",
			"default": "2018-01-21",
			"description": "Bevallingsdatum",
			"routing": {
				"send": {
					"property": "expectedDateOfChildbirth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Put Absence By Absence"
					]
				}
			}
		},
		{
			"displayName": "Expected Duration",
			"name": "expectedDuration",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Minder dan 1 week\"\n}",
			"description": "The expected duration of the absence. If the expected duration is unknown, this field will be NULL.",
			"routing": {
				"send": {
					"property": "expectedDuration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Put Absence By Absence"
					]
				}
			}
		},
		{
			"displayName": "Expected End Date Of Maternity Leave",
			"name": "expectedEndDateOfMaternityLeave",
			"type": "string",
			"default": "2018-04-21",
			"description": "verwachte datum einde zwangerschapsverlof",
			"routing": {
				"send": {
					"property": "expectedEndDateOfMaternityLeave",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Put Absence By Absence"
					]
				}
			}
		},
		{
			"displayName": "Has Mobility Issue",
			"name": "hasMobilityIssue",
			"type": "boolean",
			"default": false,
			"description": "This field indicates whether the Employee has an issue limiting its mobility.",
			"routing": {
				"send": {
					"property": "hasMobilityIssue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Put Absence By Absence"
					]
				}
			}
		},
		{
			"displayName": "Hours Worked On First Day Of Absence",
			"name": "hoursWorkedOnFirstDayOfAbsence",
			"type": "number",
			"default": 3,
			"description": "The number of hours worked on the first day of the absence.",
			"routing": {
				"send": {
					"property": "hoursWorkedOnFirstDayOfAbsence",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Put Absence By Absence"
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
						"Absence"
					],
					"operation": [
						"Put Absence By Absence"
					]
				}
			}
		},
		{
			"displayName": "Is Disrupted Employment Relationship",
			"name": "isDisruptedEmploymentRelationship",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether the employement relationship between employee and employer is disrupted.",
			"routing": {
				"send": {
					"property": "isDisruptedEmploymentRelationship",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Put Absence By Absence"
					]
				}
			}
		},
		{
			"displayName": "Is Hospitalised",
			"name": "isHospitalised",
			"type": "boolean",
			"default": false,
			"description": "Betreft het een ziekenhuisopnamen",
			"routing": {
				"send": {
					"property": "isHospitalised",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Put Absence By Absence"
					]
				}
			}
		},
		{
			"displayName": "Is Recovered Within Two Weeks",
			"name": "isRecoveredWithinTwoWeeks",
			"type": "boolean",
			"default": false,
			"description": "This field indicates whether the Employee is (expected) recoverd within two weeks, relating to a full recovery.",
			"routing": {
				"send": {
					"property": "isRecoveredWithinTwoWeeks",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Put Absence By Absence"
					]
				}
			}
		},
		{
			"displayName": "Is Third Party Liability",
			"name": "isThirdPartyLiability",
			"type": "boolean",
			"default": false,
			"description": "This field is related to `accidentType`. \nWhen `accidentType` is specified, this field indicates whether a third party is liable for the accident.",
			"routing": {
				"send": {
					"property": "isThirdPartyLiability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Put Absence By Absence"
					]
				}
			}
		},
		{
			"displayName": "Is Work Related Illness",
			"name": "isWorkRelatedIllness",
			"type": "boolean",
			"default": false,
			"description": "Beroepsziekte",
			"routing": {
				"send": {
					"property": "isWorkRelatedIllness",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Put Absence By Absence"
					]
				}
			}
		},
		{
			"displayName": "Progress",
			"name": "progress",
			"type": "json",
			"default": "{\n  \"currentIncapacityPercentage\": 100,\n  \"endOfAbsence\": {\n    \"reason\": {\n      \"key\": 1,\n      \"value\": \"Fully recoverd\"\n    }\n  },\n  \"startDate\": \"2018-01-21\"\n}",
			"routing": {
				"send": {
					"property": "progress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Put Absence By Absence"
					]
				}
			}
		},
		{
			"displayName": "Reintegration",
			"name": "reintegration",
			"type": "json",
			"default": "{\n  \"reintegrationGoal\": {\n    \"key\": 1,\n    \"value\": \"Werkhervatting in de eigen functie\"\n  }\n}",
			"routing": {
				"send": {
					"property": "reintegration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Put Absence By Absence"
					]
				}
			}
		},
		{
			"displayName": "PATCH /providers/employers/employees/absences/{absenceId}/closeabsence",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Patch Close Absence By Absence ID"
					]
				}
			}
		},
		{
			"displayName": "Absence ID",
			"name": "absenceId",
			"required": true,
			"description": "The unique identifier of an absence",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Patch Close Absence By Absence ID"
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
						"Absence"
					],
					"operation": [
						"Patch Close Absence By Absence ID"
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
						"Absence"
					],
					"operation": [
						"Patch Close Absence By Absence ID"
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
						"Absence"
					],
					"operation": [
						"Patch Close Absence By Absence ID"
					]
				}
			}
		},
		{
			"displayName": "End Of Absence",
			"name": "endOfAbsence",
			"type": "json",
			"default": "{\n  \"reason\": {\n    \"key\": 1,\n    \"value\": \"Fully recoverd\"\n  }\n}",
			"description": "date and reason for the closing/end of the absence",
			"routing": {
				"send": {
					"property": "endOfAbsence",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Patch Close Absence By Absence ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /providers/employers/employees/absences/{absenceId}/reopenabsence",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Patch Reopen Absence By Absence ID"
					]
				}
			}
		},
		{
			"displayName": "Absence ID",
			"name": "absenceId",
			"required": true,
			"description": "The unique identifier of an absence",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Patch Reopen Absence By Absence ID"
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
						"Absence"
					],
					"operation": [
						"Patch Reopen Absence By Absence ID"
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
						"Absence"
					],
					"operation": [
						"Patch Reopen Absence By Absence ID"
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
						"Absence"
					],
					"operation": [
						"Patch Reopen Absence By Absence ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/{employeeId}/absences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Get Absences By Employee ID"
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
						"Absence"
					],
					"operation": [
						"Get Absences By Employee ID"
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
						"Absence"
					],
					"operation": [
						"Get Absences By Employee ID"
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
						"Absence"
					],
					"operation": [
						"Get Absences By Employee ID"
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
						"Absence"
					],
					"operation": [
						"Get Absences By Employee ID"
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
						"Absence"
					],
					"operation": [
						"Get Absences By Employee ID"
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
						"Absence"
					],
					"operation": [
						"Get Absences By Employee ID"
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
						"Absence"
					],
					"operation": [
						"Get Absences By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/{employeeId}/absences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Post Absence By Employee ID"
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
						"Absence"
					],
					"operation": [
						"Post Absence By Employee ID"
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
						"Absence"
					],
					"operation": [
						"Post Absence By Employee ID"
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
						"Absence"
					],
					"operation": [
						"Post Absence By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Accident Type",
			"name": "accidentType",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"work related accident\"\n}",
			"description": "The type of accident that led to the absence. This field will be NULL if the absence is not related to an accident.",
			"routing": {
				"send": {
					"property": "accidentType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Post Absence By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Action To Be Taken By Occupational Health And Safety Service",
			"name": "actionToBeTakenByOccupationalHealthAndSafetyService",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Spoedcontrole aan huis\"\n}",
			"description": "The desired action to be taken regarding the absence by the occupational health and safety service (arbodienst).\n",
			"routing": {
				"send": {
					"property": "actionToBeTakenByOccupationalHealthAndSafetyService",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Post Absence By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Case Manager",
			"name": "caseManager",
			"type": "json",
			"default": "{\n  \"function\": \"Ben Hur\",\n  \"name\": \"Ben Hur\",\n  \"organization\": \"Ben Hur\",\n  \"phoneNumber\": \"+31 13-1234567\"\n}",
			"routing": {
				"send": {
					"property": "caseManager",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Post Absence By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Cause Of Absence",
			"name": "causeOfAbsence",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"maternity leave\"\n}",
			"description": "The cause of the absence. This endpoint is intended for the registration of two types of absence:\n\n  1) Illness/sickness\n\n  2) \"Vangnet\" such as maternity leave, organ donation or adoption leave\n\n\nOther absences such as Vacation days, unpayed leave and Personal leave are registerd using the leave endpoint\n",
			"routing": {
				"send": {
					"property": "causeOfAbsence",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Post Absence By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Comments",
			"name": "comments",
			"type": "string",
			"default": "Lorem ipsum dolor sit amet, id nibh adhuc omnium vix, ne nec eius inani aliquip.",
			"description": "Free text field to register any relevant information.",
			"routing": {
				"send": {
					"property": "comments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Post Absence By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Contact Information",
			"name": "contactInformation",
			"type": "json",
			"default": "{\n  \"city\": \"Leiden\",\n  \"country\": {\n    \"isoCode\": \"NL\",\n    \"key\": 1,\n    \"value\": \"Netherlands\"\n  },\n  \"furtherIndication\": {\n    \"key\": 1,\n    \"value\": \"WW\"\n  },\n  \"houseNumber\": 12,\n  \"houseNumberAddition\": \"D\",\n  \"locationType\": {\n    \"key\": 1,\n    \"value\": \"Hospital\"\n  },\n  \"name\": \"RadboudUMC Nijmegen\",\n  \"phoneNumber\": \"+31 13-1234567\",\n  \"postalCode\": \"1234 AA\",\n  \"startDate\": \"2018-01-21\",\n  \"street\": \"Voordijk\"\n}",
			"routing": {
				"send": {
					"property": "contactInformation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Post Absence By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Expected Date Of Childbirth",
			"name": "expectedDateOfChildbirth",
			"type": "string",
			"default": "2018-01-21",
			"description": "Bevallingsdatum",
			"routing": {
				"send": {
					"property": "expectedDateOfChildbirth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Post Absence By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Expected Duration",
			"name": "expectedDuration",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Minder dan 1 week\"\n}",
			"description": "The expected duration of the absence. If the expected duration is unknown, this field will be NULL.",
			"routing": {
				"send": {
					"property": "expectedDuration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Post Absence By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Expected End Date Of Maternity Leave",
			"name": "expectedEndDateOfMaternityLeave",
			"type": "string",
			"default": "2018-04-21",
			"description": "verwachte datum einde zwangerschapsverlof",
			"routing": {
				"send": {
					"property": "expectedEndDateOfMaternityLeave",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Post Absence By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Has Mobility Issue",
			"name": "hasMobilityIssue",
			"type": "boolean",
			"default": false,
			"description": "This field indicates whether the Employee has an issue limiting its mobility.",
			"routing": {
				"send": {
					"property": "hasMobilityIssue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Post Absence By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Hours Worked On First Day Of Absence",
			"name": "hoursWorkedOnFirstDayOfAbsence",
			"type": "number",
			"default": 3,
			"description": "The number of hours worked on the first day of the absence.",
			"routing": {
				"send": {
					"property": "hoursWorkedOnFirstDayOfAbsence",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Post Absence By Employee ID"
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
						"Absence"
					],
					"operation": [
						"Post Absence By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Is Disrupted Employment Relationship",
			"name": "isDisruptedEmploymentRelationship",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether the employement relationship between employee and employer is disrupted.",
			"routing": {
				"send": {
					"property": "isDisruptedEmploymentRelationship",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Post Absence By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Is Hospitalised",
			"name": "isHospitalised",
			"type": "boolean",
			"default": false,
			"description": "Betreft het een ziekenhuisopnamen",
			"routing": {
				"send": {
					"property": "isHospitalised",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Post Absence By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Is Recovered Within Two Weeks",
			"name": "isRecoveredWithinTwoWeeks",
			"type": "boolean",
			"default": false,
			"description": "This field indicates whether the Employee is (expected) recoverd within two weeks, relating to a full recovery.",
			"routing": {
				"send": {
					"property": "isRecoveredWithinTwoWeeks",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Post Absence By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Is Third Party Liability",
			"name": "isThirdPartyLiability",
			"type": "boolean",
			"default": false,
			"description": "This field is related to `accidentType`. \nWhen `accidentType` is specified, this field indicates whether a third party is liable for the accident.",
			"routing": {
				"send": {
					"property": "isThirdPartyLiability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Post Absence By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Is Work Related Illness",
			"name": "isWorkRelatedIllness",
			"type": "boolean",
			"default": false,
			"description": "Beroepsziekte",
			"routing": {
				"send": {
					"property": "isWorkRelatedIllness",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Post Absence By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Progress",
			"name": "progress",
			"type": "json",
			"default": "{\n  \"currentIncapacityPercentage\": 100,\n  \"startDate\": \"2018-01-21\"\n}",
			"routing": {
				"send": {
					"property": "progress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Post Absence By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Reintegration",
			"name": "reintegration",
			"type": "json",
			"default": "{\n  \"reintegrationGoal\": {\n    \"key\": 1,\n    \"value\": \"Werkhervatting in de eigen functie\"\n  }\n}",
			"routing": {
				"send": {
					"property": "reintegration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Post Absence By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/{employeeId}/absences/overview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Get Absence Overview By Employee ID"
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
						"Absence"
					],
					"operation": [
						"Get Absence Overview By Employee ID"
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
						"Absence"
					],
					"operation": [
						"Get Absence Overview By Employee ID"
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
						"Absence"
					],
					"operation": [
						"Get Absence Overview By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"required": true,
			"description": "The start date",
			"default": "2020-08-01",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Get Absence Overview By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"required": true,
			"description": "The end date",
			"default": "2020-08-31",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence"
					],
					"operation": [
						"Get Absence Overview By Employee ID"
					]
				}
			}
		},
];
