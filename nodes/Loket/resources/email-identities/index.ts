import type { INodeProperties } from 'n8n-workflow';

export const emailIdentitiesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					]
				}
			},
			"options": [
				{
					"name": "Delete Email Identity By Email Identity ID",
					"value": "Delete Email Identity By Email Identity ID",
					"action": "Delete an EmailIdentity for a provider",
					"description": "__Activity name:__ DeleteEmailIdentityByEmailIdentityId\n    \n\nDelete an EmailIdentity for a provider. An EmailIdentity can only be deleted when it's not used in an emailTemplate.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/emailidentities/{{$parameter[\"emailIdentityId\"]}}"
						}
					}
				},
				{
					"name": "Post Send Provider Testemail By Email Identity ID",
					"value": "Post Send Provider Testemail By Email Identity ID",
					"action": "Provider emailIdentity test email",
					"description": "__Activity name:__ PostSendProviderTestemailByEmailIdentityId\n    \n\nSend an email to test the email identity configuration. \n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/emailidentities/{{$parameter[\"emailIdentityId\"]}}/sendtestemail"
						}
					}
				},
				{
					"name": "DELETE Providers Employers Emailidentities",
					"value": "DELETE Providers Employers Emailidentities",
					"action": "Delete an EmailIdentity for an employer",
					"description": "__Activity name:__ DeleteEmailIdentityByEmailIdentityId\n    \n\nDelete an EmailIdentity for an employer. An EmailIdentity can only be deleted when it's not used in an emailTemplate.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/emailidentities/{{$parameter[\"emailIdentityId\"]}}"
						}
					}
				},
				{
					"name": "Post Send Employer Testemail By Email Identity ID",
					"value": "Post Send Employer Testemail By Email Identity ID",
					"action": "Employer emailIdentity test email",
					"description": "__Activity name:__ PostSendEmployerTestemailByEmailIdentityId\n    \n\nSend an email to test the email identity configuration. \n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/emailidentities/{{$parameter[\"emailIdentityId\"]}}/sendtestemail"
						}
					}
				},
				{
					"name": "Get Email Identities By Employer ID",
					"value": "Get Email Identities By Employer ID",
					"action": "List of EmailIdentities for an employer",
					"description": "__Activity name:__ GetEmailIdentitiesByEmployerId\n    \n\nGet the list of EmailIdentities for an employer. \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/emailidentities"
						}
					}
				},
				{
					"name": "Post Email Identity By Employer ID",
					"value": "Post Email Identity By Employer ID",
					"action": "Create an EmailIdentity for an employer",
					"description": "__Activity name:__ PostEmailIdentityByEmployerId\n    \n\nCreate an EmailIdentity for an employer.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/emailidentities"
						}
					}
				},
				{
					"name": "Post Verify Email Identity By Employer ID",
					"value": "Post Verify Email Identity By Employer ID",
					"action": "Verify an EmailIdentity for an employer",
					"description": "__Activity name:__ PostVerifyEmailIdentityByEmployerId\n    \n\nVerify an EmailIdentity for an employer. The verficationstatus will we saved and used by Loket when sending email. \n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/emailidentities/verify"
						}
					}
				},
				{
					"name": "Get Email Identities By Provider ID",
					"value": "Get Email Identities By Provider ID",
					"action": "List of EmailIdentities for a provider",
					"description": "__Activity name:__ GetEmailIdentitiesByProviderId\n    \n\nGet the list of EmailIdentities for a provider. \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/{{$parameter[\"providerId\"]}}/emailidentities"
						}
					}
				},
				{
					"name": "Post Email Identity By Provider ID",
					"value": "Post Email Identity By Provider ID",
					"action": "Create an EmailIdentity for a provider",
					"description": "__Activity name:__ PostEmailIdentityByProviderId\n    \n\nCreate an EmailIdentity for a provider.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/{{$parameter[\"providerId\"]}}/emailidentities"
						}
					}
				},
				{
					"name": "Post Verify Email Identity By Provider ID",
					"value": "Post Verify Email Identity By Provider ID",
					"action": "Verify an EmailIdentity for a provider",
					"description": "__Activity name:__ PostVerifyEmailIdentityByProviderId\n    \n\nVerify an EmailIdentity for a provider. The verficationstatus will we saved and used by Loket when sending email. \n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/{{$parameter[\"providerId\"]}}/emailidentities/verify"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/emailidentities/{emailIdentityId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Delete Email Identity By Email Identity ID"
					]
				}
			}
		},
		{
			"displayName": "Email Identity ID",
			"name": "emailIdentityId",
			"required": true,
			"description": "The emailIdentity.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Delete Email Identity By Email Identity ID"
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
						"Email Identities"
					],
					"operation": [
						"Delete Email Identity By Email Identity ID"
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
						"Email Identities"
					],
					"operation": [
						"Delete Email Identity By Email Identity ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/emailidentities/{emailIdentityId}/sendtestemail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Send Provider Testemail By Email Identity ID"
					]
				}
			}
		},
		{
			"displayName": "Email Identity ID",
			"name": "emailIdentityId",
			"required": true,
			"description": "The emailIdentity.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Send Provider Testemail By Email Identity ID"
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
						"Email Identities"
					],
					"operation": [
						"Post Send Provider Testemail By Email Identity ID"
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
						"Email Identities"
					],
					"operation": [
						"Post Send Provider Testemail By Email Identity ID"
					]
				}
			}
		},
		{
			"displayName": "To",
			"name": "to",
			"type": "string",
			"default": "user@provider.com",
			"description": "The emailadres to which a test email should be send.",
			"routing": {
				"send": {
					"property": "to",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Send Provider Testemail By Email Identity ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /providers/employers/emailidentities/{emailIdentityId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"DELETE Providers Employers Emailidentities"
					]
				}
			}
		},
		{
			"displayName": "Email Identity ID",
			"name": "emailIdentityId",
			"required": true,
			"description": "The emailIdentity.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"DELETE Providers Employers Emailidentities"
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
						"Email Identities"
					],
					"operation": [
						"DELETE Providers Employers Emailidentities"
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
						"Email Identities"
					],
					"operation": [
						"DELETE Providers Employers Emailidentities"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/emailidentities/{emailIdentityId}/sendtestemail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Send Employer Testemail By Email Identity ID"
					]
				}
			}
		},
		{
			"displayName": "Email Identity ID",
			"name": "emailIdentityId",
			"required": true,
			"description": "The emailIdentity.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Send Employer Testemail By Email Identity ID"
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
						"Email Identities"
					],
					"operation": [
						"Post Send Employer Testemail By Email Identity ID"
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
						"Email Identities"
					],
					"operation": [
						"Post Send Employer Testemail By Email Identity ID"
					]
				}
			}
		},
		{
			"displayName": "To",
			"name": "to",
			"type": "string",
			"default": "user@provider.com",
			"description": "The emailadres to which a test email should be send.",
			"routing": {
				"send": {
					"property": "to",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Send Employer Testemail By Email Identity ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/emailidentities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Get Email Identities By Employer ID"
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
						"Email Identities"
					],
					"operation": [
						"Get Email Identities By Employer ID"
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
						"Email Identities"
					],
					"operation": [
						"Get Email Identities By Employer ID"
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
						"Email Identities"
					],
					"operation": [
						"Get Email Identities By Employer ID"
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
						"Email Identities"
					],
					"operation": [
						"Get Email Identities By Employer ID"
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
						"Email Identities"
					],
					"operation": [
						"Get Email Identities By Employer ID"
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
						"Email Identities"
					],
					"operation": [
						"Get Email Identities By Employer ID"
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
						"Email Identities"
					],
					"operation": [
						"Get Email Identities By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/{employerId}/emailidentities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Email Identity By Employer ID"
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
						"Email Identities"
					],
					"operation": [
						"Post Email Identity By Employer ID"
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
						"Email Identities"
					],
					"operation": [
						"Post Email Identity By Employer ID"
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
						"Email Identities"
					],
					"operation": [
						"Post Email Identity By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Dkim Tokens",
			"name": "dkimTokens",
			"type": "json",
			"default": "[\n  \"u6deqmqhlgn3wxslcp4cugcz7ognh4gt\"\n]",
			"routing": {
				"send": {
					"property": "dkimTokens",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Email Identity By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Email Identity",
			"name": "emailIdentity",
			"type": "string",
			"default": "provider.com",
			"description": "The emailIdentity that can be used when sending email.",
			"routing": {
				"send": {
					"property": "emailIdentity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Email Identity By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Email Identity Type",
			"name": "emailIdentityType",
			"type": "options",
			"default": "DOMAIN",
			"description": "The type of the set emailIdentity",
			"options": [
				{
					"name": "DOMAIN",
					"value": "DOMAIN"
				}
			],
			"routing": {
				"send": {
					"property": "emailIdentityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Email Identity By Employer ID"
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
						"Email Identities"
					],
					"operation": [
						"Post Email Identity By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Is Dkim Verified",
			"name": "isDkimVerified",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether the EmailIdentity has passed Spf verfication.",
			"routing": {
				"send": {
					"property": "isDkimVerified",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Email Identity By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Is Spf Verified",
			"name": "isSpfVerified",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether the EmailIdentity has passed Spf verfication.",
			"routing": {
				"send": {
					"property": "isSpfVerified",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Email Identity By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Last Dkim Verified On",
			"name": "lastDkimVerifiedOn",
			"type": "string",
			"default": "2022-01-31",
			"description": "The date the Dkim settings were last verified.",
			"routing": {
				"send": {
					"property": "lastDkimVerifiedOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Email Identity By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Last Spf Verified On",
			"name": "lastSpfVerifiedOn",
			"type": "string",
			"default": "2022-01-31",
			"description": "The date the Spf settings were last verified.",
			"routing": {
				"send": {
					"property": "lastSpfVerifiedOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Email Identity By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/{employerId}/emailidentities/verify",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Verify Email Identity By Employer ID"
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
						"Email Identities"
					],
					"operation": [
						"Post Verify Email Identity By Employer ID"
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
						"Email Identities"
					],
					"operation": [
						"Post Verify Email Identity By Employer ID"
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
						"Email Identities"
					],
					"operation": [
						"Post Verify Email Identity By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Dkim Tokens",
			"name": "dkimTokens",
			"type": "json",
			"default": "[\n  \"u6deqmqhlgn3wxslcp4cugcz7ognh4gt\"\n]",
			"routing": {
				"send": {
					"property": "dkimTokens",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Verify Email Identity By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Email Identity",
			"name": "emailIdentity",
			"type": "string",
			"default": "provider.com",
			"description": "The emailIdentity that can be used when sending email.",
			"routing": {
				"send": {
					"property": "emailIdentity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Verify Email Identity By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Email Identity Type",
			"name": "emailIdentityType",
			"type": "options",
			"default": "DOMAIN",
			"description": "The type of the set emailIdentity",
			"options": [
				{
					"name": "DOMAIN",
					"value": "DOMAIN"
				}
			],
			"routing": {
				"send": {
					"property": "emailIdentityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Verify Email Identity By Employer ID"
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
						"Email Identities"
					],
					"operation": [
						"Post Verify Email Identity By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Is Dkim Verified",
			"name": "isDkimVerified",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether the EmailIdentity has passed Spf verfication.",
			"routing": {
				"send": {
					"property": "isDkimVerified",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Verify Email Identity By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Is Spf Verified",
			"name": "isSpfVerified",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether the EmailIdentity has passed Spf verfication.",
			"routing": {
				"send": {
					"property": "isSpfVerified",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Verify Email Identity By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Last Dkim Verified On",
			"name": "lastDkimVerifiedOn",
			"type": "string",
			"default": "2022-01-31",
			"description": "The date the Dkim settings were last verified.",
			"routing": {
				"send": {
					"property": "lastDkimVerifiedOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Verify Email Identity By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Last Spf Verified On",
			"name": "lastSpfVerifiedOn",
			"type": "string",
			"default": "2022-01-31",
			"description": "The date the Spf settings were last verified.",
			"routing": {
				"send": {
					"property": "lastSpfVerifiedOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Verify Email Identity By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/{providerId}/emailidentities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Get Email Identities By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Provider ID",
			"name": "providerId",
			"required": true,
			"description": "The unique identifier of a provider",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Get Email Identities By Provider ID"
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
						"Email Identities"
					],
					"operation": [
						"Get Email Identities By Provider ID"
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
						"Email Identities"
					],
					"operation": [
						"Get Email Identities By Provider ID"
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
						"Email Identities"
					],
					"operation": [
						"Get Email Identities By Provider ID"
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
						"Email Identities"
					],
					"operation": [
						"Get Email Identities By Provider ID"
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
						"Email Identities"
					],
					"operation": [
						"Get Email Identities By Provider ID"
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
						"Email Identities"
					],
					"operation": [
						"Get Email Identities By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/{providerId}/emailidentities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Email Identity By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Provider ID",
			"name": "providerId",
			"required": true,
			"description": "The unique identifier of a provider",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Email Identity By Provider ID"
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
						"Email Identities"
					],
					"operation": [
						"Post Email Identity By Provider ID"
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
						"Email Identities"
					],
					"operation": [
						"Post Email Identity By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Dkim Tokens",
			"name": "dkimTokens",
			"type": "json",
			"default": "[\n  \"u6deqmqhlgn3wxslcp4cugcz7ognh4gt\"\n]",
			"routing": {
				"send": {
					"property": "dkimTokens",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Email Identity By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Email Identity",
			"name": "emailIdentity",
			"type": "string",
			"default": "provider.com",
			"description": "The emailIdentity that can be used when sending email.",
			"routing": {
				"send": {
					"property": "emailIdentity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Email Identity By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Email Identity Type",
			"name": "emailIdentityType",
			"type": "options",
			"default": "DOMAIN",
			"description": "The type of the set emailIdentity",
			"options": [
				{
					"name": "DOMAIN",
					"value": "DOMAIN"
				}
			],
			"routing": {
				"send": {
					"property": "emailIdentityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Email Identity By Provider ID"
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
						"Email Identities"
					],
					"operation": [
						"Post Email Identity By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Is Dkim Verified",
			"name": "isDkimVerified",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether the EmailIdentity has passed Spf verfication.",
			"routing": {
				"send": {
					"property": "isDkimVerified",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Email Identity By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Is Spf Verified",
			"name": "isSpfVerified",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether the EmailIdentity has passed Spf verfication.",
			"routing": {
				"send": {
					"property": "isSpfVerified",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Email Identity By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Last Dkim Verified On",
			"name": "lastDkimVerifiedOn",
			"type": "string",
			"default": "2022-01-31",
			"description": "The date the Dkim settings were last verified.",
			"routing": {
				"send": {
					"property": "lastDkimVerifiedOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Email Identity By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Last Spf Verified On",
			"name": "lastSpfVerifiedOn",
			"type": "string",
			"default": "2022-01-31",
			"description": "The date the Spf settings were last verified.",
			"routing": {
				"send": {
					"property": "lastSpfVerifiedOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Email Identity By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/{providerId}/emailidentities/verify",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Verify Email Identity By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Provider ID",
			"name": "providerId",
			"required": true,
			"description": "The unique identifier of a provider",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Verify Email Identity By Provider ID"
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
						"Email Identities"
					],
					"operation": [
						"Post Verify Email Identity By Provider ID"
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
						"Email Identities"
					],
					"operation": [
						"Post Verify Email Identity By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Dkim Tokens",
			"name": "dkimTokens",
			"type": "json",
			"default": "[\n  \"u6deqmqhlgn3wxslcp4cugcz7ognh4gt\"\n]",
			"routing": {
				"send": {
					"property": "dkimTokens",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Verify Email Identity By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Email Identity",
			"name": "emailIdentity",
			"type": "string",
			"default": "provider.com",
			"description": "The emailIdentity that can be used when sending email.",
			"routing": {
				"send": {
					"property": "emailIdentity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Verify Email Identity By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Email Identity Type",
			"name": "emailIdentityType",
			"type": "options",
			"default": "DOMAIN",
			"description": "The type of the set emailIdentity",
			"options": [
				{
					"name": "DOMAIN",
					"value": "DOMAIN"
				}
			],
			"routing": {
				"send": {
					"property": "emailIdentityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Verify Email Identity By Provider ID"
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
						"Email Identities"
					],
					"operation": [
						"Post Verify Email Identity By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Is Dkim Verified",
			"name": "isDkimVerified",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether the EmailIdentity has passed Spf verfication.",
			"routing": {
				"send": {
					"property": "isDkimVerified",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Verify Email Identity By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Is Spf Verified",
			"name": "isSpfVerified",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether the EmailIdentity has passed Spf verfication.",
			"routing": {
				"send": {
					"property": "isSpfVerified",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Verify Email Identity By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Last Dkim Verified On",
			"name": "lastDkimVerifiedOn",
			"type": "string",
			"default": "2022-01-31",
			"description": "The date the Dkim settings were last verified.",
			"routing": {
				"send": {
					"property": "lastDkimVerifiedOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Verify Email Identity By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Last Spf Verified On",
			"name": "lastSpfVerifiedOn",
			"type": "string",
			"default": "2022-01-31",
			"description": "The date the Spf settings were last verified.",
			"routing": {
				"send": {
					"property": "lastSpfVerifiedOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Identities"
					],
					"operation": [
						"Post Verify Email Identity By Provider ID"
					]
				}
			}
		},
];
