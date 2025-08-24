#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkCicdStack } from '../lib/cdk-cicd-stack';

const app = new cdk.App();
new CdkCicdStack(app, 'CdkCicdStack', {
  env: {
    region: 'ap-northeast-1',
  },
});
app.synth();
