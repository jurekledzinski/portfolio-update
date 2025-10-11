import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

export type InputProps = {
  as?: 'input';
} & InputHTMLAttributes<HTMLInputElement>;

export type TextareaProps = {
  as?: 'textarea';
  cols?: number;
  rows?: number;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export type UnionElements = HTMLTextAreaElement | HTMLInputElement;

export type MergeProps = InputProps | TextareaProps;
