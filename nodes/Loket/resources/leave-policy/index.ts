import type { INodeProperties } from 'n8n-workflow';

export const leavePolicyDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					]
				}
			},
			"options": [
				{
					"name": "Delete Age Based Leave By Age Based Leave ID",
					"value": "Delete Age Based Leave By Age Based Leave ID",
					"action": "Delete an age based leave record",
					"description": "__Activity name :__ DeleteAgeBasedLeaveByAgeBasedLeaveId\n\nDelete an age based leave record\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/leavePolicies/agebasedleave/{{$parameter[\"ageBasedLeaveId\"]}}"
						}
					}
				},
				{
					"name": "Get Age Based Leave By Age Based Leave ID",
					"value": "Get Age Based Leave By Age Based Leave ID",
					"action": "An age based leave record",
					"description": "__Activity name :__ GetAgeBasedLeaveByAgeBasedLeaveId\n\nReturns one leave age based leave record",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/leavePolicies/agebasedleave/{{$parameter[\"ageBasedLeaveId\"]}}"
						}
					}
				},
				{
					"name": "Put Age Based Leave By Age Based Leave ID",
					"value": "Put Age Based Leave By Age Based Leave ID",
					"action": "Edit the details of an age based leave",
					"description": "__Activity name :__ PutAgeBasedLeaveByAgeBasedLeaveId\n\nEdit the details of an age based leave record\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/leavePolicies/agebasedleave/{{$parameter[\"ageBasedLeaveId\"]}}"
						}
					}
				},
				{
					"name": "Delete Wage Based Leave By Wage Based Leave ID",
					"value": "Delete Wage Based Leave By Wage Based Leave ID",
					"action": "Delete a wage based leave record",
					"description": "__Activity name :__ DeleteWageBasedLeaveByWageBasedLeaveId\n\nDelete a wage based leave record\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/leavePolicies/wagebasedleave/{{$parameter[\"wageBasedLeaveId\"]}}"
						}
					}
				},
				{
					"name": "Get Wage Based Leave By Wage Based Leave ID",
					"value": "Get Wage Based Leave By Wage Based Leave ID",
					"action": "A wage based leave record",
					"description": "__Activity name :__ GetWageBasedLeaveByAgeBasedLeaveId\n\nReturns one leave wage based leave record",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/leavePolicies/wagebasedleave/{{$parameter[\"wageBasedLeaveId\"]}}"
						}
					}
				},
				{
					"name": "Put Wage Based Leave By Wage Based Leave ID",
					"value": "Put Wage Based Leave By Wage Based Leave ID",
					"action": "Edit the details of a wage based leave",
					"description": "__Activity name :__ PutWageBasedLeaveByWageBasedLeaveId\n\nEdit the details of a wage based leave record\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/leavePolicies/wagebasedleave/{{$parameter[\"wageBasedLeaveId\"]}}"
						}
					}
				},
				{
					"name": "Delete Years Of Service Based Leave By Years Of Service Based Leave ID",
					"value": "Delete Years Of Service Based Leave By Years Of Service Based Leave ID",
					"action": "Delete an years of service based leave record",
					"description": "__Activity name :__ DeleteYearsOfServiceBasedLeaveByYearsOfServiceBasedLeaveId\n\nDelete an years of service based leave record\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/leavePolicies/yearsofservicebasedleave/{{$parameter[\"yearsOfServiceBasedLeaveId\"]}}"
						}
					}
				},
				{
					"name": "Get Years Of Service Based Leave By Years Of Service Based Leave ID",
					"value": "Get Years Of Service Based Leave By Years Of Service Based Leave ID",
					"action": "A years of service based leave record",
					"description": "__Activity name :__ GetYearsOfServiceBasedLeaveByYearsOfServiceBasedLeaveId\n\nReturns one leave years of service based leave record",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/leavePolicies/yearsofservicebasedleave/{{$parameter[\"yearsOfServiceBasedLeaveId\"]}}"
						}
					}
				},
				{
					"name": "Put Years OF Service Based Leave By Years Of Service Based Leave ID",
					"value": "Put Years OF Service Based Leave By Years Of Service Based Leave ID",
					"action": "Edit the details of a years of service based leave",
					"description": "__Activity name :__ PutYearsOFServiceBasedLeaveByYearsOfServiceBasedLeaveId\n\nEdit the details of a years of service based leave record\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/leavePolicies/yearsofservicebasedleave/{{$parameter[\"yearsOfServiceBasedLeaveId\"]}}"
						}
					}
				},
				{
					"name": "Delete Leave Policy By Leave Policy ID",
					"value": "Delete Leave Policy By Leave Policy ID",
					"action": "Delete a leave policy",
					"description": "__Activity name :__ DeleteLeavePolicyByLeavePolicyId\n\nDelete a Leave policy\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/leavePolicies/{{$parameter[\"leavePolicyId\"]}}"
						}
					}
				},
				{
					"name": "Get Leave Policy By Leave Policy ID",
					"value": "Get Leave Policy By Leave Policy ID",
					"action": "A single leave policy",
					"description": "__Activity name :__ GetLeavePolicyByLeavePolicyId\n\nReturns one leave policy",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/leavePolicies/{{$parameter[\"leavePolicyId\"]}}"
						}
					}
				},
				{
					"name": "Put Leave Policy By Leave Policy ID",
					"value": "Put Leave Policy By Leave Policy ID",
					"action": "Edit the details of a leave policy",
					"description": "__Activity name :__ PutLeavePolicyByLeavePolicyId\n\nEdit the details of a leave policy\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/leavePolicies/{{$parameter[\"leavePolicyId\"]}}"
						}
					}
				},
				{
					"name": "Get Age Based Leave By Leave Policy ID",
					"value": "Get Age Based Leave By Leave Policy ID",
					"action": "Age based leave",
					"description": "__Activity name :__ GetAgeBasedLeaveByLeavePolicyId <br/>  <br/>  Returns the age based leave for the given leave policy.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/leavePolicies/{{$parameter[\"leavePolicyId\"]}}/agebasedleave"
						}
					}
				},
				{
					"name": "Post Age Based Leave By Leave Policy ID",
					"value": "Post Age Based Leave By Leave Policy ID",
					"action": "Create an age based leave record",
					"description": "__Activity name :__ PostAgeBasedLeaveByLeavePolicyId\n\nAdd an age based leave \n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/leavePolicies/{{$parameter[\"leavePolicyId\"]}}/agebasedleave"
						}
					}
				},
				{
					"name": "Get Wage Based Leave By Leave Policy ID",
					"value": "Get Wage Based Leave By Leave Policy ID",
					"action": "Wage based leave",
					"description": "__Activity name :__ GetWageBasedLeaveByLeavePolicyId <br/>  <br/>  Returns the wage based leave for the given leave policy.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/leavePolicies/{{$parameter[\"leavePolicyId\"]}}/wagebasedleave"
						}
					}
				},
				{
					"name": "Post Wage Based Leave By Leave Policy ID",
					"value": "Post Wage Based Leave By Leave Policy ID",
					"action": "Create a wage based leave record",
					"description": "__Activity name :__ PostWageBasedLeaveByLeavePolicyId\n\nAdd a wage based leave \n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/leavePolicies/{{$parameter[\"leavePolicyId\"]}}/wagebasedleave"
						}
					}
				},
				{
					"name": "Get Years Of Service Based Leave By Leave Policy ID",
					"value": "Get Years Of Service Based Leave By Leave Policy ID",
					"action": "years of service based leave",
					"description": "__Activity name :__ GetYearsOfServiceBasedLeaveByLeavePolicyId <br/>  <br/>  Returns the years of service based leave for the given leave policy.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/leavePolicies/{{$parameter[\"leavePolicyId\"]}}/yearsofservicebasedleave"
						}
					}
				},
				{
					"name": "Post Years Of Service Based Leave By Leave Policy ID",
					"value": "Post Years Of Service Based Leave By Leave Policy ID",
					"action": "Create a years of service based leave record",
					"description": "__Activity name :__ PostYearsOfServiceBasedLeaveByLeavePolicyId\n\nAdd a years of service based leave \n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/leavePolicies/{{$parameter[\"leavePolicyId\"]}}/yearsofservicebasedleave"
						}
					}
				},
				{
					"name": "Get Leave Policies By Employer ID",
					"value": "Get Leave Policies By Employer ID",
					"action": "List of all the leave policies",
					"description": "__Activity name :__ GetLeavePoliciesByEmployerId <br/>  <br/>  Returns all the leave policies for the given employer.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/leavePolicies"
						}
					}
				},
				{
					"name": "Patch Copy Leave Policy By Employer ID",
					"value": "Patch Copy Leave Policy By Employer ID",
					"action": "Create a leave policy based on an existing leave policy",
					"description": "__Activity name :__ PatchCopyLeavePolicyByEmployerId\n\nAdd a leave policy based on an existing leave policy at providerlevel. (Create a copy)\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/leavePolicies"
						}
					}
				},
				{
					"name": "Post Leave Policy By Employer ID",
					"value": "Post Leave Policy By Employer ID",
					"action": "Create a leave policy",
					"description": "__Activity name :__ PostLeavePolicyByEmployerId\n\nAdd a leave policy\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/leavePolicies"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/leavePolicies/agebasedleave/{ageBasedLeaveId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Delete Age Based Leave By Age Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Age Based Leave ID",
			"name": "ageBasedLeaveId",
			"required": true,
			"description": "The unique identifier of the age based leave",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Delete Age Based Leave By Age Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Delete Age Based Leave By Age Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Delete Age Based Leave By Age Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Delete Age Based Leave By Age Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/leavePolicies/agebasedleave/{ageBasedLeaveId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Get Age Based Leave By Age Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Age Based Leave ID",
			"name": "ageBasedLeaveId",
			"required": true,
			"description": "The unique identifier of the age based leave",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Get Age Based Leave By Age Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Age Based Leave By Age Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Age Based Leave By Age Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Age Based Leave By Age Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Age Based Leave By Age Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Age Based Leave By Age Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Age Based Leave By Age Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/leavePolicies/agebasedleave/{ageBasedLeaveId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Age Based Leave By Age Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Age Based Leave ID",
			"name": "ageBasedLeaveId",
			"required": true,
			"description": "The unique identifier of the age based leave",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Age Based Leave By Age Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Put Age Based Leave By Age Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Put Age Based Leave By Age Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Put Age Based Leave By Age Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "From",
			"name": "from",
			"type": "json",
			"default": "{\n  \"numberOfMonths\": 0,\n  \"numberOfYears\": 40\n}",
			"routing": {
				"send": {
					"property": "from",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Age Based Leave By Age Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Put Age Based Leave By Age Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Entitlement",
			"name": "leaveEntitlement",
			"type": "json",
			"default": "{\n  \"excessLeaveToStatutory\": 40,\n  \"wtr\": 40\n}",
			"routing": {
				"send": {
					"property": "leaveEntitlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Age Based Leave By Age Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Up To And Including",
			"name": "upToAndIncluding",
			"type": "json",
			"default": "{\n  \"numberOfMonths\": 11,\n  \"numberOfYears\": 50\n}",
			"routing": {
				"send": {
					"property": "upToAndIncluding",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Age Based Leave By Age Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /providers/employers/leavePolicies/wagebasedleave/{wageBasedLeaveId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Delete Wage Based Leave By Wage Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Wage Based Leave ID",
			"name": "wageBasedLeaveId",
			"required": true,
			"description": "The unique identifier of the wage based leave",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Delete Wage Based Leave By Wage Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Delete Wage Based Leave By Wage Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Delete Wage Based Leave By Wage Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Delete Wage Based Leave By Wage Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/leavePolicies/wagebasedleave/{wageBasedLeaveId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Get Wage Based Leave By Wage Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Wage Based Leave ID",
			"name": "wageBasedLeaveId",
			"required": true,
			"description": "The unique identifier of the wage based leave",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Get Wage Based Leave By Wage Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Wage Based Leave By Wage Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Wage Based Leave By Wage Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Wage Based Leave By Wage Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Wage Based Leave By Wage Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Wage Based Leave By Wage Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Wage Based Leave By Wage Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/leavePolicies/wagebasedleave/{wageBasedLeaveId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Wage Based Leave By Wage Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Wage Based Leave ID",
			"name": "wageBasedLeaveId",
			"required": true,
			"description": "The unique identifier of the wage based leave",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Wage Based Leave By Wage Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Put Wage Based Leave By Wage Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Put Wage Based Leave By Wage Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Put Wage Based Leave By Wage Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "From Wage",
			"name": "fromWage",
			"type": "number",
			"default": 40,
			"description": "the from wage the employment has to earn to be applicable for the additional leave",
			"routing": {
				"send": {
					"property": "fromWage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Wage Based Leave By Wage Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Put Wage Based Leave By Wage Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Entitlement",
			"name": "leaveEntitlement",
			"type": "json",
			"default": "{\n  \"excessLeaveToStatutory\": 40,\n  \"wtr\": 40\n}",
			"routing": {
				"send": {
					"property": "leaveEntitlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Wage Based Leave By Wage Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Up To And Including Wage",
			"name": "upToAndIncludingWage",
			"type": "number",
			"default": 40,
			"description": "the up to and including wage the employment has to earn to be applicable for the additional leave",
			"routing": {
				"send": {
					"property": "upToAndIncludingWage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Wage Based Leave By Wage Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /providers/employers/leavePolicies/yearsofservicebasedleave/{yearsOfServiceBasedLeaveId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Delete Years Of Service Based Leave By Years Of Service Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Years Of Service Based Leave ID",
			"name": "yearsOfServiceBasedLeaveId",
			"required": true,
			"description": "The unique identifier of the years of service based leave",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Delete Years Of Service Based Leave By Years Of Service Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Delete Years Of Service Based Leave By Years Of Service Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Delete Years Of Service Based Leave By Years Of Service Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Delete Years Of Service Based Leave By Years Of Service Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/leavePolicies/yearsofservicebasedleave/{yearsOfServiceBasedLeaveId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Get Years Of Service Based Leave By Years Of Service Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Years Of Service Based Leave ID",
			"name": "yearsOfServiceBasedLeaveId",
			"required": true,
			"description": "The unique identifier of the years of service based leave",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Get Years Of Service Based Leave By Years Of Service Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Years Of Service Based Leave By Years Of Service Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Years Of Service Based Leave By Years Of Service Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Years Of Service Based Leave By Years Of Service Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Years Of Service Based Leave By Years Of Service Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Years Of Service Based Leave By Years Of Service Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Years Of Service Based Leave By Years Of Service Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/leavePolicies/yearsofservicebasedleave/{yearsOfServiceBasedLeaveId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Years OF Service Based Leave By Years Of Service Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Years Of Service Based Leave ID",
			"name": "yearsOfServiceBasedLeaveId",
			"required": true,
			"description": "The unique identifier of the years of service based leave",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Years OF Service Based Leave By Years Of Service Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Put Years OF Service Based Leave By Years Of Service Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Put Years OF Service Based Leave By Years Of Service Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Put Years OF Service Based Leave By Years Of Service Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "From",
			"name": "from",
			"type": "json",
			"default": "{\n  \"numberOfMonths\": 0,\n  \"numberOfYears\": 40\n}",
			"routing": {
				"send": {
					"property": "from",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Years OF Service Based Leave By Years Of Service Based Leave ID"
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
						"Leave Policy"
					],
					"operation": [
						"Put Years OF Service Based Leave By Years Of Service Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Entitlement",
			"name": "leaveEntitlement",
			"type": "json",
			"default": "{\n  \"excessLeaveToStatutory\": 40,\n  \"wtr\": 40\n}",
			"routing": {
				"send": {
					"property": "leaveEntitlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Years OF Service Based Leave By Years Of Service Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Up To And Including",
			"name": "upToAndIncluding",
			"type": "json",
			"default": "{\n  \"numberOfMonths\": 0,\n  \"numberOfYears\": 40\n}",
			"routing": {
				"send": {
					"property": "upToAndIncluding",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Years OF Service Based Leave By Years Of Service Based Leave ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /providers/employers/leavePolicies/{leavePolicyId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Delete Leave Policy By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Policy ID",
			"name": "leavePolicyId",
			"required": true,
			"description": "The unique identifier of the leave policy",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Delete Leave Policy By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Delete Leave Policy By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Delete Leave Policy By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Delete Leave Policy By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/leavePolicies/{leavePolicyId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Get Leave Policy By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Policy ID",
			"name": "leavePolicyId",
			"required": true,
			"description": "The unique identifier of the leave policy",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Get Leave Policy By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Leave Policy By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Leave Policy By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Leave Policy By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Leave Policy By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Leave Policy By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Leave Policy By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/leavePolicies/{leavePolicyId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Leave Policy By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Policy ID",
			"name": "leavePolicyId",
			"required": true,
			"description": "The unique identifier of the leave policy",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Leave Policy By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Put Leave Policy By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Put Leave Policy By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Put Leave Policy By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Accrual Type",
			"name": "accrualType",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Jaar\"\n}",
			"description": "Indicates how leave is accrued (yearly, monthly or hourly)  ",
			"routing": {
				"send": {
					"property": "accrualType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Leave Policy By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Additional Leave",
			"name": "additionalLeave",
			"type": "json",
			"default": "{\n  \"allocationType\": {\n    \"key\": 1,\n    \"value\": \"Boek alleen hoogste waarde\"\n  },\n  \"referenceDate1\": {\n    \"day\": 40,\n    \"month\": {\n      \"key\": 1,\n      \"value\": \"Januari\"\n    }\n  },\n  \"referenceDate2\": {\n    \"day\": 40,\n    \"month\": {\n      \"key\": 1,\n      \"value\": \"Januari\"\n    }\n  }\n}",
			"routing": {
				"send": {
					"property": "additionalLeave",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Leave Policy By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Day Of The Month To Perform Automatic Leave Calculation On",
			"name": "dayOfTheMonthToPerformAutomaticLeaveCalculationOn",
			"type": "number",
			"default": 12,
			"description": "They day of the month on which the automatic accrual of (yearly or monthly) leave is performed. The yearly calculation is repeated every month to encompase any changes made that have affect on the past.\nIf for example 31 is chosen and a specific month does not have that day the logic will pick the first available date of said month.          ",
			"routing": {
				"send": {
					"property": "dayOfTheMonthToPerformAutomaticLeaveCalculationOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Leave Policy By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Put Leave Policy By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Entitlement",
			"name": "leaveEntitlement",
			"type": "json",
			"default": "{\n  \"excessLeaveToStatutory\": 40,\n  \"statutory\": 160,\n  \"wtr\": 40\n}",
			"routing": {
				"send": {
					"property": "leaveEntitlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Leave Policy By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Request",
			"name": "leaveRequest",
			"type": "json",
			"default": "{\n  \"applyLeaveSchedule\": false,\n  \"leavePattern\": {\n    \"evenWeeks\": {\n      \"friday\": 2,\n      \"monday\": 0,\n      \"saturday\": 0,\n      \"sunday\": 0,\n      \"thursday\": 8,\n      \"tuesday\": 8,\n      \"wednesday\": 8\n    },\n    \"oddWeeks\": {\n      \"friday\": 4,\n      \"monday\": 8,\n      \"saturday\": 0,\n      \"sunday\": 0,\n      \"thursday\": 7.5,\n      \"tuesday\": 8,\n      \"wednesday\": 4\n    }\n  },\n  \"useHolidaysInCalculation\": false\n}",
			"routing": {
				"send": {
					"property": "leaveRequest",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Leave Policy By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Unit Type",
			"name": "leaveUnitType",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Uren\"\n}",
			"description": "Indicates what the unit type (hours or days) is. Employments linked to this leave policy use this leaveUnitType for their leave.",
			"routing": {
				"send": {
					"property": "leaveUnitType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Leave Policy By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Normal leave",
			"description": "The name of the leave policy",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Leave Policy By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Payout Leave Immediately",
			"name": "payoutLeaveImmediately",
			"type": "boolean",
			"default": false,
			"description": "If leave `accrualType` is set to based on hours worked (uren) then this field allows for the leave hours to be paid out directly instead of being accrued.",
			"routing": {
				"send": {
					"property": "payoutLeaveImmediately",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Leave Policy By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Round To",
			"name": "roundTo",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"0.01\"\n}",
			"description": "Indicates to how many digits after the decimal point to round the numbers",
			"routing": {
				"send": {
					"property": "roundTo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Leave Policy By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Rounding Method",
			"name": "roundingMethod",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Logical\"\n}",
			"description": "Indicates how to round the numbers ",
			"routing": {
				"send": {
					"property": "roundingMethod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Put Leave Policy By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/leavePolicies/{leavePolicyId}/agebasedleave",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Get Age Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Policy ID",
			"name": "leavePolicyId",
			"required": true,
			"description": "The unique identifier of the leave policy",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Get Age Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Age Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Age Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Age Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Age Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Age Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Age Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/leavePolicies/{leavePolicyId}/agebasedleave",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Age Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Policy ID",
			"name": "leavePolicyId",
			"required": true,
			"description": "The unique identifier of the leave policy",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Age Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Post Age Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Post Age Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "From",
			"name": "from",
			"type": "json",
			"default": "{\n  \"numberOfMonths\": 0,\n  \"numberOfYears\": 40\n}",
			"routing": {
				"send": {
					"property": "from",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Age Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Post Age Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Entitlement",
			"name": "leaveEntitlement",
			"type": "json",
			"default": "{\n  \"excessLeaveToStatutory\": 40,\n  \"wtr\": 40\n}",
			"routing": {
				"send": {
					"property": "leaveEntitlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Age Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Up To And Including",
			"name": "upToAndIncluding",
			"type": "json",
			"default": "{\n  \"numberOfMonths\": 11,\n  \"numberOfYears\": 50\n}",
			"routing": {
				"send": {
					"property": "upToAndIncluding",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Age Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/leavePolicies/{leavePolicyId}/wagebasedleave",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Get Wage Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Policy ID",
			"name": "leavePolicyId",
			"required": true,
			"description": "The unique identifier of the leave policy",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Get Wage Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Wage Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Wage Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Wage Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Wage Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Wage Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Wage Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/leavePolicies/{leavePolicyId}/wagebasedleave",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Wage Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Policy ID",
			"name": "leavePolicyId",
			"required": true,
			"description": "The unique identifier of the leave policy",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Wage Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Post Wage Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Post Wage Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "From Wage",
			"name": "fromWage",
			"type": "number",
			"default": 40,
			"description": "the from wage the employment has to earn to be applicable for the additional leave",
			"routing": {
				"send": {
					"property": "fromWage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Wage Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Post Wage Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Entitlement",
			"name": "leaveEntitlement",
			"type": "json",
			"default": "{\n  \"excessLeaveToStatutory\": 40,\n  \"wtr\": 40\n}",
			"routing": {
				"send": {
					"property": "leaveEntitlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Wage Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Up To And Including Wage",
			"name": "upToAndIncludingWage",
			"type": "number",
			"default": 40,
			"description": "the up to and including wage the employment has to earn to be applicable for the additional leave",
			"routing": {
				"send": {
					"property": "upToAndIncludingWage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Wage Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/leavePolicies/{leavePolicyId}/yearsofservicebasedleave",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Get Years Of Service Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Policy ID",
			"name": "leavePolicyId",
			"required": true,
			"description": "The unique identifier of the leave policy",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Get Years Of Service Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Years Of Service Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Years Of Service Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Years Of Service Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Years Of Service Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Years Of Service Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Years Of Service Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/leavePolicies/{leavePolicyId}/yearsofservicebasedleave",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Years Of Service Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Policy ID",
			"name": "leavePolicyId",
			"required": true,
			"description": "The unique identifier of the leave policy",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Years Of Service Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Post Years Of Service Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Post Years Of Service Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "From",
			"name": "from",
			"type": "json",
			"default": "{\n  \"numberOfMonths\": 0,\n  \"numberOfYears\": 40\n}",
			"routing": {
				"send": {
					"property": "from",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Years Of Service Based Leave By Leave Policy ID"
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
						"Leave Policy"
					],
					"operation": [
						"Post Years Of Service Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Entitlement",
			"name": "leaveEntitlement",
			"type": "json",
			"default": "{\n  \"excessLeaveToStatutory\": 40,\n  \"wtr\": 40\n}",
			"routing": {
				"send": {
					"property": "leaveEntitlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Years Of Service Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Up To And Including",
			"name": "upToAndIncluding",
			"type": "json",
			"default": "{\n  \"numberOfMonths\": 0,\n  \"numberOfYears\": 40\n}",
			"routing": {
				"send": {
					"property": "upToAndIncluding",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Years Of Service Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/leavePolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Get Leave Policies By Employer ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Leave Policies By Employer ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Leave Policies By Employer ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Leave Policies By Employer ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Leave Policies By Employer ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Leave Policies By Employer ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Leave Policies By Employer ID"
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
						"Leave Policy"
					],
					"operation": [
						"Get Leave Policies By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /providers/employers/{employerId}/leavePolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Patch Copy Leave Policy By Employer ID"
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
						"Leave Policy"
					],
					"operation": [
						"Patch Copy Leave Policy By Employer ID"
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
						"Leave Policy"
					],
					"operation": [
						"Patch Copy Leave Policy By Employer ID"
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
						"Leave Policy"
					],
					"operation": [
						"Patch Copy Leave Policy By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Verlofregeling Metaal CAO",
			"description": "The name of the leave policy",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Patch Copy Leave Policy By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Source Leave Policy ID",
			"name": "sourceLeavePolicyId",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of the Leave policy at providerlevel which should be copied.",
			"routing": {
				"send": {
					"property": "sourceLeavePolicyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Patch Copy Leave Policy By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/{employerId}/leavePolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Leave Policy By Employer ID"
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
						"Leave Policy"
					],
					"operation": [
						"Post Leave Policy By Employer ID"
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
						"Leave Policy"
					],
					"operation": [
						"Post Leave Policy By Employer ID"
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
						"Leave Policy"
					],
					"operation": [
						"Post Leave Policy By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Accrual Type",
			"name": "accrualType",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Jaar\"\n}",
			"description": "Indicates how leave is accrued (yearly, monthly or hourly)  ",
			"routing": {
				"send": {
					"property": "accrualType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Leave Policy By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Additional Leave",
			"name": "additionalLeave",
			"type": "json",
			"default": "{\n  \"allocationType\": {\n    \"key\": 1,\n    \"value\": \"Boek alleen hoogste waarde\"\n  },\n  \"referenceDate1\": {\n    \"day\": 40,\n    \"month\": {\n      \"key\": 1,\n      \"value\": \"Januari\"\n    }\n  },\n  \"referenceDate2\": {\n    \"day\": 40,\n    \"month\": {\n      \"key\": 1,\n      \"value\": \"Januari\"\n    }\n  }\n}",
			"routing": {
				"send": {
					"property": "additionalLeave",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Leave Policy By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Day Of The Month To Perform Automatic Leave Calculation On",
			"name": "dayOfTheMonthToPerformAutomaticLeaveCalculationOn",
			"type": "number",
			"default": 12,
			"description": "They day of the month on which the automatic accrual of (yearly or monthly) leave is performed. The yearly calculation is repeated every month to encompase any changes made that have affect on the past.\nIf for example 31 is chosen and a specific month does not have that day the logic will pick the first available date of said month.          ",
			"routing": {
				"send": {
					"property": "dayOfTheMonthToPerformAutomaticLeaveCalculationOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Leave Policy By Employer ID"
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
						"Leave Policy"
					],
					"operation": [
						"Post Leave Policy By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Entitlement",
			"name": "leaveEntitlement",
			"type": "json",
			"default": "{\n  \"excessLeaveToStatutory\": 40,\n  \"statutory\": 160,\n  \"wtr\": 40\n}",
			"routing": {
				"send": {
					"property": "leaveEntitlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Leave Policy By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Request",
			"name": "leaveRequest",
			"type": "json",
			"default": "{\n  \"applyLeaveSchedule\": false,\n  \"leavePattern\": {\n    \"evenWeeks\": {\n      \"friday\": 2,\n      \"monday\": 0,\n      \"saturday\": 0,\n      \"sunday\": 0,\n      \"thursday\": 8,\n      \"tuesday\": 8,\n      \"wednesday\": 8\n    },\n    \"oddWeeks\": {\n      \"friday\": 4,\n      \"monday\": 8,\n      \"saturday\": 0,\n      \"sunday\": 0,\n      \"thursday\": 7.5,\n      \"tuesday\": 8,\n      \"wednesday\": 4\n    }\n  },\n  \"useHolidaysInCalculation\": false\n}",
			"routing": {
				"send": {
					"property": "leaveRequest",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Leave Policy By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Unit Type",
			"name": "leaveUnitType",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Uren\"\n}",
			"description": "Indicates what the unit type (hours or days) is. Employments linked to this leave policy use this leaveUnitType for their leave.",
			"routing": {
				"send": {
					"property": "leaveUnitType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Leave Policy By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Normal leave",
			"description": "The name of the leave policy",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Leave Policy By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Payout Leave Immediately",
			"name": "payoutLeaveImmediately",
			"type": "boolean",
			"default": false,
			"description": "If leave `accrualType` is set to based on hours worked (uren) then this field allows for the leave hours to be paid out directly instead of being accrued.",
			"routing": {
				"send": {
					"property": "payoutLeaveImmediately",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Leave Policy By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Round To",
			"name": "roundTo",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"0.01\"\n}",
			"description": "Indicates to how many digits after the decimal point to round the numbers",
			"routing": {
				"send": {
					"property": "roundTo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Leave Policy By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Rounding Method",
			"name": "roundingMethod",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Logical\"\n}",
			"description": "Indicates how to round the numbers ",
			"routing": {
				"send": {
					"property": "roundingMethod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy"
					],
					"operation": [
						"Post Leave Policy By Employer ID"
					]
				}
			}
		},
];
