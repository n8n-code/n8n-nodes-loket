import type { INodeProperties } from 'n8n-workflow';

export const conceptEmployeeDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					]
				}
			},
			"options": [
				{
					"name": "Get Concept Employee Minimized By Concept Employee ID",
					"value": "Get Concept Employee Minimized By Concept Employee ID",
					"action": "Details of a concept employee with fewer fields.",
					"description": "__Activity name :__ GetConceptEmployeeMinimizedByConceptEmployeeId\n\n\n Get the details of a concept employee with fewer fields\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/conceptemployees/minimized/{{$parameter[\"conceptEmployeeId\"]}}"
						}
					}
				},
				{
					"name": "Put Concept Employee Minized By Concept Employee ID",
					"value": "Put Concept Employee Minized By Concept Employee ID",
					"action": "Edit the details of a concept employee with fewer fields.",
					"description": "__Activity name :__ PutConceptEmployeeMinimizedByConceptEmployeeId\n\nEdit the details of a concept employee with fewer fields.\n\n* Possible options (metadata) for generic fields of the type \"metadata\" can be acquired (GET) by adding `/metadata` to the URL.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/conceptemployees/minimized/{{$parameter[\"conceptEmployeeId\"]}}"
						}
					}
				},
				{
					"name": "Delete Concept Employee By Concept Employee ID",
					"value": "Delete Concept Employee By Concept Employee ID",
					"action": "Delete a concept employee",
					"description": "__Activity name :__ DeleteConceptEmployeeByConceptEmployeeId\n\nDelete a concept employee\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/conceptemployees/{{$parameter[\"conceptEmployeeId\"]}}"
						}
					}
				},
				{
					"name": "Get Concept Employee By Concept Employee ID",
					"value": "Get Concept Employee By Concept Employee ID",
					"action": "Details of a concept employee",
					"description": "__Activity name :__ GetConceptEmployeeByConceptEmployeeId\n\n\n Get the details of a concept employee\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/conceptemployees/{{$parameter[\"conceptEmployeeId\"]}}"
						}
					}
				},
				{
					"name": "Put Concept Employee By Concept Employee ID",
					"value": "Put Concept Employee By Concept Employee ID",
					"action": "Edit the details of a concept employee",
					"description": "__Activity name :__ PutConceptEmployeeByConceptEmployeeId\n\nEdit the details of a concept employee\n\n* Possible options (metadata) for generic fields of the type \"metadata\" can be acquired (GET) by adding `/metadata` to the URL.\n* Possible options dependent on a specific payrollAdministration can be acquired via `../providers/employers/conceptemployees/metadata/payrollAdministration/{payrollAdministrationId}`.\n* Possible options for payGrade can be acquired via `../providers/employers/conceptemployees/metadata/payrolladministration/{payrollAdministrationId}/payscale/{payScaleKey}`.\n\nA `payGrade` has time based values dictating the wage for a given period. These values can be acquired by performing another metadata request `../providers/employers/conceptemployees/metadata/payscale/{payScaleKey}/paygrade/{payGradeKey}`.\n\n\n__NonPayrollAdministrations__ For nonPayrollAdministrations the equivalent MetaData-endpoints are also available as described above. However NO specific defaults endpoint is available for the nonPayrollAdministration.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/conceptemployees/{{$parameter[\"conceptEmployeeId\"]}}"
						}
					}
				},
				{
					"name": "Get Citizen Service Number By Concept Employee ID",
					"value": "Get Citizen Service Number By Concept Employee ID",
					"action": "Citizen service number of a concept employee",
					"description": "__Activity name :__ GetCitizenServiceNumberByConceptEmployeeId\n\nGet the citizen service number (BSN) of a concept employee.  BSN is separately authorized in Loket and is therefore designed to have its own activities.  \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/conceptemployees/{{$parameter[\"conceptEmployeeId\"]}}/citizenservicenumber"
						}
					}
				},
				{
					"name": "Put Citizen Service Number By Concept Employee ID",
					"value": "Put Citizen Service Number By Concept Employee ID",
					"action": "Update the citizen service number of a concept employee",
					"description": "__Activity name :__ PutCitizenServiceNumberByConceptEmployeeId\n\nUpdate the citizen service number (BSN) of a concept employee BSN is separately authorized in Loket and is therefore designed to have its own activities.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/conceptemployees/{{$parameter[\"conceptEmployeeId\"]}}/citizenservicenumber"
						}
					}
				},
				{
					"name": "Patch Convert To Employee By Concept Employee ID",
					"value": "Patch Convert To Employee By Concept Employee ID",
					"action": "Convert a concept employee to an employee",
					"description": "__Activity name :__ PatchConvertToEmployeeByConceptEmployeeId\n\nThis endpoint \"converts\" the conceptEmployee to an actual employee in Loket. This means creating a number of records including Employee, Employment, WorkingHours, Wage etc. If the promotion is succesful the concept employee record will be deleted.\n\nThe GUID of the conceptEmployee will be copied over to the GUID of the newly created Employee.\n\nBefore performing these steps, quite a number of validations are performed to ensure that the provided information can be used to create a functionally valid employee.\n\n\nIf the employeeNumber is empty then this will be set automatically for the employee. (i.e. highest available number +1)\n\n__Additional functionality :__\n* It is possible to call an alternative functionality closely related to this functionality. This additional functionality will perform the validation ONLY, and it will NOT convert the conceptEmployee to an actual employee even when all validation rules are successful. Other than not performing the actual step of converting the employee the endpoint will behave identically to the actual endpoint.\n* This functionality can be applied by setting the optional X-ValidateOnly header to true\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/conceptemployees/{{$parameter[\"conceptEmployeeId\"]}}/convertToEmployee"
						}
					}
				},
				{
					"name": "Get Concept Employees By Employer ID",
					"value": "Get Concept Employees By Employer ID",
					"action": "List of concept employee for an employer",
					"description": "__Activity name :__ GetConceptEmployeesByEmployerId\n\nGet a list of all concept employee for the given employer. Concept employee can be used as a template/prefill when creating a new employee/employment.  <br/> This function may also be used in case one does not have all the required fields to create a new employee/employment. The validations are disabled for a concept employee allowing one to create a concept employee filling only a subset of available fields, then later \"promoting\" the Concept employee in loket.nl to employee/employment. \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/conceptemployees"
						}
					}
				},
				{
					"name": "Post Concept Employee By Employer ID",
					"value": "Post Concept Employee By Employer ID",
					"action": "Create a concept employee for an employer",
					"description": "__Activity name :__ PostConceptEmployeeByEmployerId\n\nCreate a concept employee for an employer\n\n* Possible options (metadata) for generic fields of the type \"metadata\" can be acquired (GET) by adding `/metadata` to the URL.\n* Possible options dependent on a specific payrollAdministration can be acquired via `../providers/employers/conceptemployees/metadata/payrolladministration/{payrollAdministrationId}`.\n* Possible options for payGrade can be acquired via `../providers/employers/conceptemployees/metadata/payrolladministration/{payrollAdministrationId}/payscale/{payScaleKey}`.\nA `payGrade` has time based values dictating the wage for a given period. These values can be acquired by performing another metadata request to GET `../providers/employers/conceptemployees/metadata/payrolladministration/{payrollAdministrationId}/payscale/{payScaleKey}/paygrade/{payGradeKey}`. This endpoint has the optional parameter \"date\" that may be used to specifying a measure date.\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults` to the POST URL. \n\n        \nDefault values that are dependent on the selected payroll administration can be acquired by adding `/providers/employers/conceptemployees/defaults/payrolladministration/{payrollAdministrationId}` to the POST URL.\n\n__NonPayrollAdministrations__ For nonPayrollAdministrations the equivalent MetaData-endpoints are also available as described above. However NO specific defaults endpoint is available for the nonPayrollAdministration.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/conceptemployees"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/conceptemployees/minimized/{conceptEmployeeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Get Concept Employee Minimized By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Concept Employee ID",
			"name": "conceptEmployeeId",
			"required": true,
			"description": "The unique identifier of the concept employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Get Concept Employee Minimized By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Get Concept Employee Minimized By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Get Concept Employee Minimized By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/conceptemployees/minimized/{conceptEmployeeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee Minized By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Concept Employee ID",
			"name": "conceptEmployeeId",
			"required": true,
			"description": "The unique identifier of the concept employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee Minized By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee Minized By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee Minized By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee Minized By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "json",
			"default": "{\n  \"city\": \"Leiden\",\n  \"country\": {\n    \"isoCode\": \"NL\",\n    \"key\": 1,\n    \"value\": \"Netherlands\"\n  },\n  \"furtherIndication\": {\n    \"key\": 1,\n    \"value\": \"WW\"\n  },\n  \"houseNumber\": 12,\n  \"houseNumberAddition\": \"D\",\n  \"location\": \"Fourth floor or building C\",\n  \"postalCode\": \"1234 AA\",\n  \"street\": \"Voordijk\"\n}",
			"description": "The address of the employee",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee Minized By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Contact Information",
			"name": "contactInformation",
			"type": "json",
			"default": "{\n  \"emailAddress\": \"info@loket.nl\",\n  \"faxNumber\": \"+31 13-1234561\",\n  \"mobilePhoneNumber\": \"+31 6-1231456\",\n  \"phoneNumber\": \"+31 13-1234567\"\n}",
			"description": "Contact information for the employee",
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
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee Minized By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Iban",
			"name": "iban",
			"type": "string",
			"default": "NL52ABNA0424968264",
			"description": "International Bank Account Number. Only IBAN without spaces are accepted.",
			"routing": {
				"send": {
					"property": "iban",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee Minized By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee Minized By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Personal Details",
			"name": "personalDetails",
			"type": "json",
			"default": "{\n  \"civilStatus\": {\n    \"key\": 2,\n    \"value\": \"Married\"\n  },\n  \"dateOfBirth\": \"1995-05-21\",\n  \"firstName\": \"Susan\",\n  \"formattedName\": \"Wiel - van Bergen S.L. van de\",\n  \"gender\": {\n    \"key\": 2,\n    \"value\": \"female\"\n  },\n  \"howToFormatLastName\": {\n    \"key\": 2,\n    \"value\": \"last name + last name partner\"\n  },\n  \"initials\": \"S.L.\",\n  \"lastName\": \"Bergen\",\n  \"lastNamePartner\": \"Wiel\",\n  \"nationality\": {\n    \"key\": 2,\n    \"value\": \"Dutch\"\n  },\n  \"placeOfBirth\": \"Amsterdam\",\n  \"prefix\": \"van\",\n  \"prefixPartner\": \"van de\",\n  \"title\": {\n    \"key\": 2,\n    \"value\": \"e.g. Msc, PHD or Baron\"\n  }\n}",
			"description": "The personal details of the employee. e.g. Name, civil status en gender",
			"routing": {
				"send": {
					"property": "personalDetails",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee Minized By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /providers/employers/conceptemployees/{conceptEmployeeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Delete Concept Employee By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Concept Employee ID",
			"name": "conceptEmployeeId",
			"required": true,
			"description": "The unique identifier of the concept employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Delete Concept Employee By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Delete Concept Employee By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Delete Concept Employee By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Delete Concept Employee By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/conceptemployees/{conceptEmployeeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Get Concept Employee By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Concept Employee ID",
			"name": "conceptEmployeeId",
			"required": true,
			"description": "The unique identifier of the concept employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Get Concept Employee By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Get Concept Employee By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Get Concept Employee By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/conceptemployees/{conceptEmployeeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Concept Employee ID",
			"name": "conceptEmployeeId",
			"required": true,
			"description": "The unique identifier of the concept employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Creation Date",
			"name": "creationDate",
			"type": "string",
			"default": "2018-05-08",
			"description": "The date time on which the record was added (ISO-8601)",
			"routing": {
				"send": {
					"property": "creationDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Employee Data",
			"name": "employeeData",
			"type": "json",
			"default": "{\n  \"address\": {\n    \"city\": \"Leiden\",\n    \"country\": {\n      \"isoCode\": \"NL\",\n      \"key\": 1,\n      \"value\": \"Netherlands\"\n    },\n    \"furtherIndication\": {\n      \"key\": 1,\n      \"value\": \"WW\"\n    },\n    \"houseNumber\": 12,\n    \"houseNumberAddition\": \"D\",\n    \"location\": \"Fourth floor or building C\",\n    \"postalCode\": \"1234 AA\",\n    \"street\": \"Voordijk\"\n  },\n  \"contactInformation\": {\n    \"emailAddress\": \"info@loket.nl\",\n    \"faxNumber\": \"+31 13-1234561\",\n    \"mobilePhoneNumber\": \"+31 6-1231456\",\n    \"phoneNumber\": \"+31 13-1234567\"\n  },\n  \"deviatingPostalAddress\": {\n    \"city\": \"Leiden\",\n    \"country\": {\n      \"isoCode\": \"NL\",\n      \"key\": 1,\n      \"value\": \"Netherlands\"\n    },\n    \"furtherIndication\": {\n      \"key\": 1,\n      \"value\": \"WW\"\n    },\n    \"houseNumber\": 12,\n    \"houseNumberAddition\": \"D\",\n    \"location\": \"Fourth floor or building C\",\n    \"postalCode\": \"1234 AA\",\n    \"street\": \"Voordijk\"\n  },\n  \"employeeNumber\": 156,\n  \"iban\": \"NL52ABNA0424968264\",\n  \"identityDocument\": {\n    \"documentIdentification\": \"CRE45553433\",\n    \"typeOfDocument\": {\n      \"key\": 2,\n      \"value\": \"Passport\"\n    }\n  },\n  \"personalDetails\": {\n    \"civilStatus\": {\n      \"key\": 2,\n      \"value\": \"Married\"\n    },\n    \"dateOfBirth\": \"1995-05-21\",\n    \"firstName\": \"Susan\",\n    \"formattedName\": \"Wiel - van Bergen S.L. van de\",\n    \"gender\": {\n      \"key\": 2,\n      \"value\": \"female\"\n    },\n    \"howToFormatLastName\": {\n      \"key\": 2,\n      \"value\": \"last name + last name partner\"\n    },\n    \"initials\": \"S.L.\",\n    \"lastName\": \"Bergen\",\n    \"lastNamePartner\": \"Wiel\",\n    \"nationality\": {\n      \"key\": 2,\n      \"value\": \"Dutch\"\n    },\n    \"placeOfBirth\": \"Amsterdam\",\n    \"prefix\": \"van\",\n    \"prefixPartner\": \"van de\",\n    \"title\": {\n      \"key\": 2,\n      \"value\": \"e.g. Msc, PHD or Baron\"\n    }\n  }\n}",
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
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Employment Data",
			"name": "employmentData",
			"type": "json",
			"default": "{\n  \"calculateWorkingHours\": true,\n  \"cancellationNoticeDate\": \"2019-05-31\",\n  \"cancellationPeriodEmployee\": 1,\n  \"cancellationPeriodEmployer\": 1,\n  \"cancellationPeriodTimeUnit\": {\n    \"key\": 4,\n    \"value\": \"Maand(en)\"\n  },\n  \"commissionUntilDate\": \"2019-01-01\",\n  \"deviatingCLATaxReturn\": 2,\n  \"emailLeaveRequest\": \"api@loket.nl\",\n  \"employeeProfileId\": {\n    \"key\": 1,\n    \"value\": \"Profiel full-timers\"\n  },\n  \"employmentContractType\": {\n    \"key\": 1,\n    \"value\": \"Labor agreement\"\n  },\n  \"employmentDurationType\": {\n    \"key\": 1,\n    \"value\": \"Contract of indefinite duration\"\n  },\n  \"essMutationSet\": {\n    \"key\": 1,\n    \"value\": \"Standaard\"\n  },\n  \"exemptionInsuranceObligation\": {\n    \"key\": 0,\n    \"value\": \"Geen uitzondering.\"\n  },\n  \"firstDayNotification\": false,\n  \"hasOnCallAppearanceObligation\": true,\n  \"historicalStartDate\": \"2012-05-01\",\n  \"incomeRelationshipNumber\": 12,\n  \"isAnonymousEmployee\": true,\n  \"isDirectorAndMajorShareholder\": false,\n  \"isFamilyOfOwner\": false,\n  \"isGemoedsbezwaardEmployeeInsurance\": true,\n  \"isGemoedsbezwaardNationalInsurance\": true,\n  \"isOnCallEmployment\": true,\n  \"isPreviousOwner\": false,\n  \"namePayslip\": \"Steve Jobs\",\n  \"nonPayrollAdministration\": {\n    \"description\": \"Bakker\",\n    \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n    \"name\": \"ABC accountants\"\n  },\n  \"participation55plusRegulationUWV\": false,\n  \"payrollAdministration\": {\n    \"clientNumber\": 1234,\n    \"description\": \"Bakker\",\n    \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n    \"name\": \"ABC accountants\"\n  },\n  \"periodPayGradeAdjustment\": 2,\n  \"professionCode\": 4,\n  \"sendMdvNotification\": true,\n  \"signalPayGradeAdjustment\": false,\n  \"specialIncomeRatio\": {\n    \"key\": 0,\n    \"value\": \"n.v.t.\"\n  },\n  \"startCancellationNoticePeriod\": \"2019-06-01\",\n  \"startDate\": \"2019-01-01\",\n  \"startDateContractOfIndefiniteDuration\": \"2018-05-08\",\n  \"typeOfEmployee\": {\n    \"key\": 1,\n    \"value\": \"Werknemer\"\n  },\n  \"typeOfParticipation\": {\n    \"key\": 0,\n    \"value\": \"n.v.t.\"\n  },\n  \"vacationCoupons\": {\n    \"key\": 1,\n    \"value\": \"n.v.t.\"\n  },\n  \"valueOfParticipation\": {\n    \"key\": 0,\n    \"value\": \"n.v.t.\"\n  },\n  \"writtenEmploymentContract\": true\n}",
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
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Self Service",
			"name": "selfService",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "selfService",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Unique Name",
			"name": "uniqueName",
			"type": "string",
			"default": "Sollicitant 013",
			"description": "The unique name for this concept employment. It is commonly used as a displayname in the user interface to select this entry in a dropdown box.",
			"routing": {
				"send": {
					"property": "uniqueName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Put Concept Employee By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/conceptemployees/{conceptEmployeeId}/citizenservicenumber",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Get Citizen Service Number By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Concept Employee ID",
			"name": "conceptEmployeeId",
			"required": true,
			"description": "The unique identifier of the concept employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Get Citizen Service Number By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Get Citizen Service Number By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Get Citizen Service Number By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/conceptemployees/{conceptEmployeeId}/citizenservicenumber",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Put Citizen Service Number By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Concept Employee ID",
			"name": "conceptEmployeeId",
			"required": true,
			"description": "The unique identifier of the concept employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Put Citizen Service Number By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Put Citizen Service Number By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Put Citizen Service Number By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Put Citizen Service Number By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Citizen Service Number",
			"name": "citizenServiceNumber",
			"type": "string",
			"default": "042168588",
			"description": "The social security number of the employee used in communication with the Dutch tax authorities. The number has to be a valid Dutch citizen service number (BSN).",
			"routing": {
				"send": {
					"property": "citizenServiceNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Put Citizen Service Number By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /providers/employers/conceptemployees/{conceptEmployeeId}/convertToEmployee",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Patch Convert To Employee By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Concept Employee ID",
			"name": "conceptEmployeeId",
			"required": true,
			"description": "The unique identifier of the concept employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Patch Convert To Employee By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Patch Convert To Employee By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Patch Convert To Employee By Concept Employee ID"
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
						"Concept Employee"
					],
					"operation": [
						"Patch Convert To Employee By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "X Validate Only",
			"name": "X-ValidateOnly",
			"description": "If set to true only the validations will be performed no changes will be committed.",
			"default": true,
			"type": "boolean",
			"routing": {
				"request": {
					"headers": {
						"X-ValidateOnly": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Patch Convert To Employee By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/conceptemployees",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Get Concept Employees By Employer ID"
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
						"Concept Employee"
					],
					"operation": [
						"Get Concept Employees By Employer ID"
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
						"Concept Employee"
					],
					"operation": [
						"Get Concept Employees By Employer ID"
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
						"Concept Employee"
					],
					"operation": [
						"Get Concept Employees By Employer ID"
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
						"Concept Employee"
					],
					"operation": [
						"Get Concept Employees By Employer ID"
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
						"Concept Employee"
					],
					"operation": [
						"Get Concept Employees By Employer ID"
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
						"Concept Employee"
					],
					"operation": [
						"Get Concept Employees By Employer ID"
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
						"Concept Employee"
					],
					"operation": [
						"Get Concept Employees By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/{employerId}/conceptemployees",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Post Concept Employee By Employer ID"
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
						"Concept Employee"
					],
					"operation": [
						"Post Concept Employee By Employer ID"
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
						"Concept Employee"
					],
					"operation": [
						"Post Concept Employee By Employer ID"
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
						"Concept Employee"
					],
					"operation": [
						"Post Concept Employee By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Creation Date",
			"name": "creationDate",
			"type": "string",
			"default": "2018-05-08",
			"description": "The date time on which the record was added (ISO-8601)",
			"routing": {
				"send": {
					"property": "creationDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Post Concept Employee By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Employee Data",
			"name": "employeeData",
			"type": "json",
			"default": "{\n  \"address\": {\n    \"city\": \"Leiden\",\n    \"country\": {\n      \"isoCode\": \"NL\",\n      \"key\": 1,\n      \"value\": \"Netherlands\"\n    },\n    \"furtherIndication\": {\n      \"key\": 1,\n      \"value\": \"WW\"\n    },\n    \"houseNumber\": 12,\n    \"houseNumberAddition\": \"D\",\n    \"location\": \"Fourth floor or building C\",\n    \"postalCode\": \"1234 AA\",\n    \"street\": \"Voordijk\"\n  },\n  \"contactInformation\": {\n    \"emailAddress\": \"info@loket.nl\",\n    \"faxNumber\": \"+31 13-1234561\",\n    \"mobilePhoneNumber\": \"+31 6-1231456\",\n    \"phoneNumber\": \"+31 13-1234567\"\n  },\n  \"deviatingPostalAddress\": {\n    \"city\": \"Leiden\",\n    \"country\": {\n      \"isoCode\": \"NL\",\n      \"key\": 1,\n      \"value\": \"Netherlands\"\n    },\n    \"furtherIndication\": {\n      \"key\": 1,\n      \"value\": \"WW\"\n    },\n    \"houseNumber\": 12,\n    \"houseNumberAddition\": \"D\",\n    \"location\": \"Fourth floor or building C\",\n    \"postalCode\": \"1234 AA\",\n    \"street\": \"Voordijk\"\n  },\n  \"employeeNumber\": 156,\n  \"iban\": \"NL52ABNA0424968264\",\n  \"identityDocument\": {\n    \"documentIdentification\": \"CRE45553433\",\n    \"typeOfDocument\": {\n      \"key\": 2,\n      \"value\": \"Passport\"\n    }\n  },\n  \"personalDetails\": {\n    \"civilStatus\": {\n      \"key\": 2,\n      \"value\": \"Married\"\n    },\n    \"dateOfBirth\": \"1995-05-21\",\n    \"firstName\": \"Susan\",\n    \"formattedName\": \"Wiel - van Bergen S.L. van de\",\n    \"gender\": {\n      \"key\": 2,\n      \"value\": \"female\"\n    },\n    \"howToFormatLastName\": {\n      \"key\": 2,\n      \"value\": \"last name + last name partner\"\n    },\n    \"initials\": \"S.L.\",\n    \"lastName\": \"Bergen\",\n    \"lastNamePartner\": \"Wiel\",\n    \"nationality\": {\n      \"key\": 2,\n      \"value\": \"Dutch\"\n    },\n    \"placeOfBirth\": \"Amsterdam\",\n    \"prefix\": \"van\",\n    \"prefixPartner\": \"van de\",\n    \"title\": {\n      \"key\": 2,\n      \"value\": \"e.g. Msc, PHD or Baron\"\n    }\n  }\n}",
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
						"Concept Employee"
					],
					"operation": [
						"Post Concept Employee By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Employment Data",
			"name": "employmentData",
			"type": "json",
			"default": "{\n  \"calculateWorkingHours\": true,\n  \"cancellationNoticeDate\": \"2019-05-31\",\n  \"cancellationPeriodEmployee\": 1,\n  \"cancellationPeriodEmployer\": 1,\n  \"cancellationPeriodTimeUnit\": {\n    \"key\": 4,\n    \"value\": \"Maand(en)\"\n  },\n  \"commissionUntilDate\": \"2019-01-01\",\n  \"deviatingCLATaxReturn\": 2,\n  \"emailLeaveRequest\": \"api@loket.nl\",\n  \"employeeProfileId\": {\n    \"key\": 1,\n    \"value\": \"Profiel full-timers\"\n  },\n  \"employmentContractType\": {\n    \"key\": 1,\n    \"value\": \"Labor agreement\"\n  },\n  \"employmentDurationType\": {\n    \"key\": 1,\n    \"value\": \"Contract of indefinite duration\"\n  },\n  \"essMutationSet\": {\n    \"key\": 1,\n    \"value\": \"Standaard\"\n  },\n  \"exemptionInsuranceObligation\": {\n    \"key\": 0,\n    \"value\": \"Geen uitzondering.\"\n  },\n  \"firstDayNotification\": false,\n  \"hasOnCallAppearanceObligation\": true,\n  \"historicalStartDate\": \"2012-05-01\",\n  \"incomeRelationshipNumber\": 12,\n  \"isAnonymousEmployee\": true,\n  \"isDirectorAndMajorShareholder\": false,\n  \"isFamilyOfOwner\": false,\n  \"isGemoedsbezwaardEmployeeInsurance\": true,\n  \"isGemoedsbezwaardNationalInsurance\": true,\n  \"isOnCallEmployment\": true,\n  \"isPreviousOwner\": false,\n  \"namePayslip\": \"Steve Jobs\",\n  \"nonPayrollAdministration\": {\n    \"description\": \"Bakker\",\n    \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n    \"name\": \"ABC accountants\"\n  },\n  \"participation55plusRegulationUWV\": false,\n  \"payrollAdministration\": {\n    \"clientNumber\": 1234,\n    \"description\": \"Bakker\",\n    \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n    \"name\": \"ABC accountants\"\n  },\n  \"periodPayGradeAdjustment\": 2,\n  \"professionCode\": 4,\n  \"sendMdvNotification\": true,\n  \"signalPayGradeAdjustment\": false,\n  \"specialIncomeRatio\": {\n    \"key\": 0,\n    \"value\": \"n.v.t.\"\n  },\n  \"startCancellationNoticePeriod\": \"2019-06-01\",\n  \"startDate\": \"2019-01-01\",\n  \"startDateContractOfIndefiniteDuration\": \"2018-05-08\",\n  \"typeOfEmployee\": {\n    \"key\": 1,\n    \"value\": \"Werknemer\"\n  },\n  \"typeOfParticipation\": {\n    \"key\": 0,\n    \"value\": \"n.v.t.\"\n  },\n  \"vacationCoupons\": {\n    \"key\": 1,\n    \"value\": \"n.v.t.\"\n  },\n  \"valueOfParticipation\": {\n    \"key\": 0,\n    \"value\": \"n.v.t.\"\n  },\n  \"writtenEmploymentContract\": true\n}",
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
						"Concept Employee"
					],
					"operation": [
						"Post Concept Employee By Employer ID"
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
						"Concept Employee"
					],
					"operation": [
						"Post Concept Employee By Employer ID"
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
						"Concept Employee"
					],
					"operation": [
						"Post Concept Employee By Employer ID"
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
						"Concept Employee"
					],
					"operation": [
						"Post Concept Employee By Employer ID"
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
						"Concept Employee"
					],
					"operation": [
						"Post Concept Employee By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Self Service",
			"name": "selfService",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "selfService",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Post Concept Employee By Employer ID"
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
						"Concept Employee"
					],
					"operation": [
						"Post Concept Employee By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Unique Name",
			"name": "uniqueName",
			"type": "string",
			"default": "Sollicitant 013",
			"description": "The unique name for this concept employment. It is commonly used as a displayname in the user interface to select this entry in a dropdown box.",
			"routing": {
				"send": {
					"property": "uniqueName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee"
					],
					"operation": [
						"Post Concept Employee By Employer ID"
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
						"Concept Employee"
					],
					"operation": [
						"Post Concept Employee By Employer ID"
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
						"Concept Employee"
					],
					"operation": [
						"Post Concept Employee By Employer ID"
					]
				}
			}
		},
];
