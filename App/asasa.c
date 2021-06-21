#include<stdio.h>
#include<malloc.h>
#include<stdlib.h>
#include<conio.h>
struct node
{
    int data;
    struct node *next;
};
struct node *root=NULL;
struct node *insert_front(struct node *);
struct node *insert_back(struct node *);
struct node *erase_front(struct node *);
struct node *erase_back(struct node *);
struct node *find_front(struct node *);
struct node *find_back(struct node *);
void main()
{
    int ch;
    while(1)
    {
        printf("\n 1.Find a node from front \n 2.Find a node from back \n 3.Insert a node at the front \n 4.Insert a node at back \n 5.Erase a node from the front \n 6.Erase a node from the back \n 7. EXIT \n");
        switch(ch)
        {
             case 1: root=find_front(root);
                        break;
             case 2: root=find_back(root);
                        break;
             case 3: root=insert_front(root);
                        break;
             case 4: root=insert_back(root);
                        break;
             case 5: root=erase_front(root);
                        break;
             case 6: root=erase_back(root);
                        break;
             case 7: exit(0);

             default: printf("wrong choice");
        }
    }
}
struct node *insert_front(struct node *root)
{
    struct node *new_node, *ptr,*preptr;
    int num, value;
    printf("\n enter the data for new node");
    scanf("%d",&num);
    new_node=(struct node*)malloc(sizeof(struct node));
    printf("\n enter the value before which the data has to be inserted");
    scanf("%d",&value);
    new_node->data=num;
    ptr=root;
    while(ptr->data!=value)
    {
        preptr=ptr;
        ptr=ptr->next;
    }
    preptr->next=new_node;
    new_node->next=ptr;
    return root;
}
struct node *insert_back(struct node *root)
{
    struct node *new_node, *ptr,*preptr;
    int num, value;
    printf("\n enter the data for new node");
    scanf("%d",&num);
    new_node=(struct node*)malloc(sizeof(struct node));
    printf("\n enter the value after which the data has to be inserted\n");
    scanf("%d",&value);
    new_node->data=num;
    ptr=root;
    preptr=ptr;
    while(preptr->data!=value)
    {
        preptr=ptr;
        ptr=ptr->next;
    }
    preptr->next=new_node;
    new_node->next=ptr;
    return root;
}
struct node *erase_front(struct node *root)
{
    struct node *ptr, *preptr;
    ptr=root;
    int val;
    printf("\n enter the value of the node which has to be deleted \n");
    scanf("%d",&val);
    if(ptr->data==val)
    {
        root = erase_front(root);
        return root;
    }
    else
    {
    while(ptr->data !=val)
    {
        preptr=ptr;
        ptr=ptr->next;
    }
    preptr->next=ptr->next;
    free(ptr);
    return root;
    }
}
struct node *erase_back(struct node *root)
{
    struct node *ptr, *preptr;
    ptr=root;
    int val;
    printf("\n enter the value after which the node has to be deleted \n");
    scanf("%d",&val);
    preptr=ptr;
    while(preptr->data!= val)
    {
     preptr=ptr;
     ptr=ptr->next;
    }
    preptr->next=ptr->next;
    free(ptr);
    return root;
}
struct node *find_front(struct node *root)
{
    struct node *ptr;
    int value;
    printf("ENTER THE DATA TO FIND");
    scanf("%d",&value);
    ptr=root;
    while(ptr!=value)
    {
        ptr=ptr->next;
        printf("NODE IS IN THE LIST");
    }
    return root;
}
struct node *find_back(struct node *root)
{
 
}